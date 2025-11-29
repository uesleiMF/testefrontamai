import React, { Component } from 'react';
import {
  Button, TextField, Dialog, DialogActions,
  DialogTitle, DialogContent, TableBody, Table,
  TableContainer, TableHead, TableRow, TableCell, CircularProgress,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import swal from 'sweetalert';
import axios from 'axios';

export default class Dashboard extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      token: null,
      openCasalModal: false,
      openCasalEditModal: false,
      id: '',
      name: '',
      desc: '',
      tel: '',
      niverH: '',
      niverM: '',
      fileName: '',
      filePreview: '', // preview da imagem (add e edit)
      page: 1,
      search: '',
      casais: [],
      pages: 0,
      loading: false
    };

    this.fileInputAddRef = React.createRef();
    this.fileInputEditRef = React.createRef();
  }

  componentDidMount = () => {
    this._isMounted = true;
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    } else {
      if (this._isMounted) this.setState({ token }, () => this.getCasal());
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getAuthHeaders = () => {
    const t = this.state.token || localStorage.getItem('token');
    if (!t) return {};
    return { Authorization: `Bearer ${t}`, token: t };
  }

  getCasal = async () => {
    if (this._isMounted) this.setState({ loading: true });
    try {
      let data = `?page=${this.state.page}`;
      if (this.state.search) data += `&search=${encodeURIComponent(this.state.search)}`;
      const res = await axios.get(`https://backtestmar.onrender.com/get-casal${data}`, {
        headers: this.getAuthHeaders()
      });
      const casais = res.data?.casais ?? res.data?.casal ?? [];
      const pages = res.data?.pages ?? res.data?.totalPages ?? 1;
      if (this._isMounted) this.setState({ loading: false, casais, pages });
    } catch (err) {
      const msg = err?.response?.data?.errorMessage || err.message || 'Erro ao buscar casais';
      swal({ text: msg, icon: "error" });
      if (this._isMounted) this.setState({ loading: false, casais: [], pages: 0 });
    }
  }

  deleteCasal = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este casal?')) return;
    try {
      const headers = { 'Content-Type': 'application/json', ...this.getAuthHeaders() };
      let res;
      try {
        res = await axios.delete(`https://backtestmar.onrender.com/delete-casal/${id}`, { headers });
      } catch (e) {
        res = await axios.post('https://backtestmar.onrender.com/delete-casal', { id }, { headers });
      }
      swal({ text: res.data?.title || res.data?.message || 'Deletado com sucesso!', icon: "success" });
      if (this._isMounted) this.setState({ page: 1 }, () => this.getCasal());
    } catch (err) {
      const msg = err?.response?.data?.errorMessage || err.message || 'Erro ao deletar';
      swal({ text: msg, icon: "error" });
    }
  }

  pageChange = (e, page) => {
    if (this._isMounted) this.setState({ page }, () => this.getCasal());
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  onChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (this._isMounted) this.setState({
        fileName: file.name,
        filePreview: URL.createObjectURL(file)
      });
      return;
    }
    const { name, value } = e.target;
    if (this._isMounted) {
      this.setState({ [name]: value }, () => {
        if (name === 'search') {
          if (this._isMounted) this.setState({ page: 1 }, () => this.getCasal());
        }
      });
    }
  };

  addCasal = async () => {
    const fileInput = this.fileInputAddRef.current;
    if (!fileInput || !fileInput.files[0]) return swal({ text: 'Selecione uma imagem', icon: 'error' });
    if (!this.state.name || !this.state.desc || !this.state.tel || !this.state.niverH || !this.state.niverM) {
      return swal({ text: 'Preencha todos os campos', icon: 'error' });
    }

    const fd = new FormData();
    fd.append('file', fileInput.files[0]);
    fd.append('name', this.state.name);
    fd.append('desc', this.state.desc);
    fd.append('tel', this.state.tel);
    fd.append('niverH', this.state.niverH);
    fd.append('niverM', this.state.niverM);

    try {
      const res = await axios.post('https://backtestmar.onrender.com/add-casal', fd, {
        headers: { 'content-type': 'multipart/form-data', ...this.getAuthHeaders() }
      });
      swal({ text: res.data?.title || res.data?.message || 'Casal adicionado!', icon: "success" });
      if (this._isMounted) {
        this.handleCasalClose();
        this.setState({ name: '', desc: '', tel: '', niverH: '', niverM: '', fileName: '', filePreview: '', page: 1 }, () => this.getCasal());
      }
      if (fileInput) fileInput.value = null;
    } catch (err) {
      const msg = err?.response?.data?.errorMessage || err.message || 'Erro ao adicionar casal';
      swal({ text: msg, icon: "error" });
      if (this._isMounted) this.handleCasalClose();
    }
  }

 updateCasal = async () => {
  const fileInput = this.fileInputEditRef.current;
  const id = this.state.id;

  if (!id) {
    swal({ text: 'ID do casal ausente', icon: 'error' });
    return;
  }

  if (!this.state.name || !this.state.desc || !this.state.tel || !this.state.niverH || !this.state.niverM) {
    swal({ text: 'Preencha todos os campos', icon: 'error' });
    return;
  }

  // Criar FormData para envio da imagem + campos
  const fd = new FormData();
  fd.append('name', this.state.name);
  fd.append('desc', this.state.desc);
  fd.append('tel', this.state.tel);
  fd.append('niverH', this.state.niverH);
  fd.append('niverM', this.state.niverM);

  // Só adiciona imagem se houver arquivo selecionado
  if (fileInput && fileInput.files[0]) {
    fd.append('file', fileInput.files[0]);
  }

  try {
    const headers = { 'content-type': 'multipart/form-data', ...this.getAuthHeaders() };

    // Enviar para PUT /update-casal/:id
    const res = await axios.put(`https://backtestmar.onrender.com/update-casal/${id}`, fd, { headers });

    swal({ text: res.data?.title || res.data?.message || 'Atualizado com sucesso!', icon: 'success' });

    if (this._isMounted) {
      this.handleCasaltEditClose();
      this.setState({ name: '', desc: '', tel: '', niverH: '', niverM: '', fileName: '' }, () => this.getCasal());
    }

    if (fileInput) fileInput.value = null;
  } catch (err) {
    const msg = err?.response?.data?.errorMessage || err.message || 'Erro ao atualizar';
    swal({ text: msg, icon: 'error' });
    if (this._isMounted) this.handleCasaltEditClose();
  }
};

  handleCasalOpen = () => {
    if (this._isMounted) {
      this.setState({
        openCasalModal: true,
        id: '', name: '', desc: '', tel: '', niverH: '', niverM: '', fileName: '', filePreview: ''
      }, () => {
        if (this.fileInputAddRef.current) this.fileInputAddRef.current.value = null;
      });
    }
  };

  handleCasalClose = () => {
    if (this._isMounted) this.setState({ openCasalModal: false });
  };

  handleCasalEditOpen = (data) => {
    if (this._isMounted) {
      this.setState({
        openCasalEditModal: true,
        id: data._id,
        name: data.name,
        desc: data.desc,
        tel: data.tel,
        niverH: data.niverH?.substring(0, 10) || '',
        niverM: data.niverM?.substring(0, 10) || '',
        fileName: data.image || '',
        filePreview: data.image || ''
      }, () => {
        if (this.fileInputEditRef.current) this.fileInputEditRef.current.value = null;
      });
    }
  };

  handleCasaltEditClose = () => {
    if (this._isMounted) this.setState({ openCasalEditModal: false });
  };

  render() {
    const { casais, loading, page, pages, filePreview } = this.state;

    return (
      <div>
        {loading && <div style={{ display: 'flex', justifyContent: 'center', margin: 8 }}><CircularProgress color="inherit" /></div>}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h2 style={{ margin: 0 }}>CELULAS DE CASAIS</h2>
          <div>
            <Button variant="contained" color="primary" size="small" onClick={this.handleCasalOpen} style={{ marginRight: 8 }}>Adicionar Casais</Button>
            <Button variant="contained" size="small" onClick={this.logOut}>Sair</Button>
          </div>
        </div>

        {/* Edit Casais */}
        <Dialog open={this.state.openCasalEditModal} onClose={this.handleCasaltEditClose}>
          <DialogTitle>Editar Casais</DialogTitle>
          <DialogContent>
            <TextField type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nome Casal" fullWidth margin="dense" />
            <TextField type="text" name="desc" value={this.state.desc} onChange={this.onChange} placeholder="Descrição" fullWidth margin="dense" />
            <TextField type="text" name="tel" value={this.state.tel} onChange={this.onChange} placeholder="Contato" fullWidth margin="dense" />
            <TextField type="date" name="niverH" value={this.state.niverH} onChange={this.onChange} fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <TextField type="date" name="niverM" value={this.state.niverM} onChange={this.onChange} fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <div style={{ marginTop: 12 }}>
              <input ref={this.fileInputEditRef} type="file" accept="image/*" onChange={this.onChange} style={{ display: 'inline-block' }} />
              <span style={{ marginLeft: 8 }}>{this.state.fileName}</span>
            </div>
            {filePreview && (
              <div style={{ marginTop: 12 }}>
                <img src={filePreview} alt="Preview" width="120" height="120" style={{ borderRadius: 8, objectFit: 'cover' }} />
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCasaltEditClose} color="primary">Cancelar</Button>
            <Button disabled={!this.state.name} onClick={this.updateCasal} color="primary">Editar Casais</Button>
          </DialogActions>
        </Dialog>

        {/* Add Casais */}
        <Dialog open={this.state.openCasalModal} onClose={this.handleCasalClose}>
          <DialogTitle>Adicionar Casais</DialogTitle>
          <DialogContent>
            <TextField type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nome Casais" fullWidth margin="dense" />
            <TextField type="text" name="desc" value={this.state.desc} onChange={this.onChange} placeholder="Descrição" fullWidth margin="dense" />
            <TextField type="text" name="tel" value={this.state.tel} onChange={this.onChange} placeholder="Contato" fullWidth margin="dense" />
            <TextField type="date" name="niverH" value={this.state.niverH} onChange={this.onChange} fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <TextField type="date" name="niverM" value={this.state.niverM} onChange={this.onChange} fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <div style={{ marginTop: 12 }}>
              <input ref={this.fileInputAddRef} type="file" accept="image/*" onChange={this.onChange} style={{ display: 'inline-block' }} />
              <span style={{ marginLeft: 8 }}>{this.state.fileName}</span>
            </div>
            {filePreview && (
              <div style={{ marginTop: 12 }}>
                <img src={filePreview} alt="Preview" width="120" height="120" style={{ borderRadius: 8, objectFit: 'cover' }} />
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCasalClose} color="primary">Cancelar</Button>
            <Button disabled={!this.state.name || !this.state.desc || !this.state.tel || !this.state.niverH || !this.state.niverM || !this.fileInputAddRef.current?.files[0]} onClick={this.addCasal} color="primary">Adicionar Casais</Button>
          </DialogActions>
        </Dialog>

        <br />

        <TableContainer>
          <div style={{ marginBottom: 12 }}>
            <TextField type="search" name="search" value={this.state.search} onChange={this.onChange} placeholder="Procurar Casais" variant="outlined" size="small" />
          </div>
          <Table aria-label="casais-table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Imagem</TableCell>
                <TableCell align="center">Nome Casal</TableCell>
                <TableCell align="center">Descrição</TableCell>
                <TableCell align="center">Contato</TableCell>
                <TableCell align="center">Aniversario Homem</TableCell>
                <TableCell align="center">Aniversario Mulher</TableCell>
                <TableCell align="center">Ação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {casais.map(row => (
                <TableRow key={row._id || row.name}>
                  <TableCell align="center">
                    {row.image ? <img src={row.image} alt={row.name || 'Imagem'} width="70" height="70" style={{ borderRadius: 8, objectFit: 'cover' }} /> : '—'}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.desc}</TableCell>
                  <TableCell align="center">{row.tel}</TableCell>
                  <TableCell align="center">{row.niverH?.substring(0, 10) || ''}</TableCell>
                  <TableCell align="center">{row.niverM?.substring(0, 10) || ''}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="primary" size="small" onClick={() => this.handleCasalEditOpen(row)} style={{ marginRight: 6 }}>Editar</Button>
                    <Button variant="outlined" color="secondary" size="small" onClick={() => this.deleteCasal(row._id)}>Deletar</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Pagination count={pages} page={page} onChange={this.pageChange} color="primary" />
        </TableContainer>
      </div>
    );
  }
}

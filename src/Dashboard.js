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
  constructor() {
    super();
    this.state = {
      token: false,
      openCasalModal: false,
      openCasalEditModal: false,
      id: '',
      name: '',
      desc: '',
      tel: '',
      niverH: '',
      niverM: '',
      fileName: '',
      page: 1,
      search: '',
      casais: [],
      pages: 0,
      loading: false
    };

    // refs para inputs de arquivo (separados para adicionar / editar)
    this.fileInputAddRef = React.createRef();
    this.fileInputEditRef = React.createRef();
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      this.props.history.push('/login');
    } else {
      this.setState({ token }, () => this.getCasal());
    }
  }

  // Helper: devolve headers com Authorization e fallback token
  getAuthHeaders = () => {
    const t = this.state.token;
    if (!t) return {};
    return {
      Authorization: `Bearer ${t}`,
      token: t // fallback se o backend esperar header 'token'
    };
  }

  getCasal = () => {
    this.setState({ loading: true });

    let data = `?page=${this.state.page}`;
    if (this.state.search) data += `&search=${encodeURIComponent(this.state.search)}`;

    axios.get(`https://backtestmar.onrender.com/get-casal${data}`, {
      headers: this.getAuthHeaders()
    }).then((res) => {
      this.setState({ loading: false, casais: res.data.casais || [], pages: res.data.pages || 0 });
    }).catch((err) => {
      const msg = err?.response?.data?.errorMessage || err.message;
      swal({ text: msg, icon: "error", type: "error" });
      this.setState({ loading: false, casais: [], pages: 0 });
    });
  }

  deleteCasal = (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este casal?')) return;

    axios.post('https://backtestmar.onrender.com/delete-casal', { id }, {
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders()
      }
    }).then((res) => {
      swal({ text: res.data.title, icon: "success", type: "success" });
      this.setState({ page: 1 }, () => this.pageChange(null, 1));
    }).catch((err) => {
      const msg = err?.response?.data?.errorMessage || err.message;
      swal({ text: msg, icon: "error", type: "error" });
    });
  }

  pageChange = (e, page) => {
    this.setState({ page }, () => this.getCasal());
  }

  logOut = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  onChange = (e) => {
    // se veio arquivo (input type=file), atualiza apenas fileName no state (não controlar value)
    if (e.target.files && e.target.files[0]) {
      this.setState({ fileName: e.target.files[0].name });
      return;
    }

    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      if (name === 'search') {
        this.setState({ page: 1 }, () => this.getCasal());
      }
    });
  };

  addCasal = () => {
    const fileInput = this.fileInputAddRef.current;
    if (!fileInput || !fileInput.files[0]) {
      swal({ text: 'Selecione uma imagem', icon: 'error', type: 'error' });
      return;
    }

    if (!this.state.name || !this.state.desc || !this.state.tel || !this.state.niverH || !this.state.niverM) {
      swal({ text: 'Preencha todos os campos', icon: 'error', type: 'error' });
      return;
    }

    const fd = new FormData();
    fd.append('file', fileInput.files[0]);
    fd.append('name', this.state.name);
    fd.append('desc', this.state.desc);
    fd.append('tel', this.state.tel);
    fd.append('niverH', this.state.niverH);
    fd.append('niverM', this.state.niverM);

    axios.post('https://backtestmar.onrender.com/add-casal', fd, {
      headers: {
        'content-type': 'multipart/form-data',
        ...this.getAuthHeaders()
      }
    }).then((res) => {
      swal({ text: res.data.title, icon: "success", type: "success" });
      this.handleCasalClose();
      // limpar campos e recarregar
      this.setState({ name: '', desc: '', tel: '', niverH: '', niverM: '', fileName: '', page: 1 }, () => this.getCasal());
      if (fileInput) fileInput.value = null;
    }).catch((err) => {
      const msg = err?.response?.data?.errorMessage || err.message;
      swal({ text: msg, icon: "error", type: "error" });
      this.handleCasalClose();
    });
  }

  updateCasal = () => {
    const fileInput = this.fileInputEditRef.current;
    const fd = new FormData();
    fd.append('id', this.state.id);
    if (fileInput && fileInput.files[0]) fd.append('file', fileInput.files[0]);
    fd.append('name', this.state.name);
    fd.append('desc', this.state.desc);
    fd.append('tel', this.state.tel);
    fd.append('niverH', this.state.niverH);
    fd.append('niverM', this.state.niverM);

    axios.post('https://backtestmar.onrender.com/update-casal', fd, {
      headers: {
        'content-type': 'multipart/form-data',
        ...this.getAuthHeaders()
      }
    }).then((res) => {
      swal({ text: res.data.title, icon: "success", type: "success" });
      this.handleCasaltEditClose();
      this.setState({ name: '', desc: '', tel: '', niverH: '', niverM: '', fileName: '' }, () => this.getCasal());
      if (fileInput) fileInput.value = null;
    }).catch((err) => {
      const msg = err?.response?.data?.errorMessage || err.message;
      swal({ text: msg, icon: "error", type: "error" });
      this.handleCasaltEditClose();
    });
  }

  handleCasalOpen = () => {
    this.setState({
      openCasalModal: true,
      id: '',
      name: '',
      desc: '',
      tel: '',
      niverH: '',
      niverM: '',
      fileName: ''
    });
    // limpar input file add se existir
    if (this.fileInputAddRef.current) this.fileInputAddRef.current.value = null;
  };

  handleCasalClose = () => {
    this.setState({ openCasalModal: false });
  };

  handleCasalEditOpen = (data) => {
    this.setState({
      openCasalEditModal: true,
      id: data._id,
      name: data.name,
      desc: data.desc,
      tel: data.tel,
      niverH: data.niverH ? data.niverH.substring(0, 10) : '',
      niverM: data.niverM ? data.niverM.substring(0, 10) : '',
      fileName: data.image || ''
    });
    if (this.fileInputEditRef.current) this.fileInputEditRef.current.value = null;
  };

  handleCasaltEditClose = () => {
    this.setState({ openCasalEditModal: false });
  };

  render() {
    return (
      <div>
        {this.state.loading && <CircularProgress color="inherit" />}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>CELULAS DE CASAIS</h2>
          <div>
            <Button variant="contained" color="primary" size="small" onClick={this.handleCasalOpen} style={{ marginRight: 8 }}>
              Adicionar Casais
            </Button>
            <Button variant="contained" size="small" onClick={this.logOut}>
              Sair
            </Button>
          </div>
        </div>

        {/* Edit Casais */}
        <Dialog
          open={this.state.openCasalEditModal}
          onClose={this.handleCasaltEditClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Editar Casais</DialogTitle>
          <DialogContent>
            <TextField type="text" autoComplete="off" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nome Casal" fullWidth margin="dense" />
            <TextField type="text" autoComplete="off" name="desc" value={this.state.desc} onChange={this.onChange} placeholder="Descrição" fullWidth margin="dense" />
            <TextField type="text" autoComplete="off" name="tel" value={this.state.tel} onChange={this.onChange} placeholder="Contato" fullWidth margin="dense" />
            <TextField type="date" autoComplete="off" name="niverH" value={this.state.niverH} onChange={this.onChange} placeholder="Aniversario Homem" fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <TextField type="date" autoComplete="off" name="niverM" value={this.state.niverM} onChange={this.onChange} placeholder="Aniversario Mulher" fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <div style={{ marginTop: 12 }}>
              <input
                ref={this.fileInputEditRef}
                type="file"
                accept="image/*"
                name="file"
                onChange={(e) => this.onChange(e)}
                id="fileInputEdit"
                style={{ display: 'inline-block' }}
              />
              <span style={{ marginLeft: 8 }}>{this.state.fileName}</span>
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleCasaltEditClose} color="primary">Cancelar</Button>
            <Button
              disabled={
                this.state.name === '' ||
                this.state.desc === '' ||
                this.state.tel === '' ||
                this.state.niverH === '' ||
                this.state.niverM === ''
              }
              onClick={() => this.updateCasal()}
              color="primary"
              autoFocus
            >
              Editar Casais
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add Casais */}
        <Dialog
          open={this.state.openCasalModal}
          onClose={this.handleCasalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Adicionar Casais</DialogTitle>
          <DialogContent>
            <TextField type="text" autoComplete="off" name="name" value={this.state.name} onChange={this.onChange} placeholder="Nome Casais" fullWidth margin="dense" />
            <TextField type="text" autoComplete="off" name="desc" value={this.state.desc} onChange={this.onChange} placeholder="Descrição" fullWidth margin="dense" />
            <TextField type="text" autoComplete="off" name="tel" value={this.state.tel} onChange={this.onChange} placeholder="Contato" fullWidth margin="dense" />
            <TextField type="date" autoComplete="off" name="niverH" value={this.state.niverH} onChange={this.onChange} placeholder="Aniversario Homem" fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <TextField type="date" autoComplete="off" name="niverM" value={this.state.niverM} onChange={this.onChange} placeholder="Aniversario Mulher" fullWidth margin="dense" InputLabelProps={{ shrink: true }} />
            <div style={{ marginTop: 12 }}>
              <input
                ref={this.fileInputAddRef}
                type="file"
                accept="image/*"
                name="file"
                onChange={(e) => this.onChange(e)}
                id="fileInputAdd"
                style={{ display: 'inline-block' }}
                required
              />
              <span style={{ marginLeft: 8 }}>{this.state.fileName}</span>
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleCasalClose} color="primary">Cancelar</Button>
            <Button
              disabled={
                this.state.name === '' ||
                this.state.desc === '' ||
                this.state.tel === '' ||
                this.state.niverH === '' ||
                this.state.niverM === '' ||
                (!this.fileInputAddRef.current || !this.fileInputAddRef.current.files[0])
              }
              onClick={() => this.addCasal()}
              color="primary"
              autoFocus
            >
              Adicionar Casais
            </Button>
          </DialogActions>
        </Dialog>

        <br />

        <TableContainer>
          <div style={{ marginBottom: 12 }}>
            <TextField
              type="search"
              autoComplete="off"
              name="search"
              value={this.state.search}
              onChange={this.onChange}
              placeholder="Procurar Casais"
              variant="outlined"
              size="small"
            />
          </div>

          <Table aria-label="simple table">
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
              {this.state.casais.map((row) => (
                <TableRow key={row._id || row.name}>
                  <TableCell align="center">
                    {row.image ? <img src={`https://backtestmar.onrender.com/${row.image}`} alt="" width="70" height="70" /> : '—'}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.desc}</TableCell>
                  <TableCell align="center">{row.tel}</TableCell>
                  <TableCell align="center">{row.niverH ? row.niverH.substring(0, 10) : ''}</TableCell>
                  <TableCell align="center">{row.niverM ? row.niverM.substring(0, 10) : ''}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="primary" size="small" onClick={() => this.handleCasalEditOpen(row)} style={{ marginRight: 6 }}>
                      Editar
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" onClick={() => this.deleteCasal(row._id)}>
                      Deletar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br />
          <Pagination count={this.state.pages} page={this.state.page} onChange={this.pageChange} color="primary" />
        </TableContainer>
      </div>
    );
  }
}

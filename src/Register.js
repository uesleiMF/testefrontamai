import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link } from '@material-ui/core';
import axios from 'axios';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: ''
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = async () => {
    const { username, password, confirm_password } = this.state;

    if (!username || !password || !confirm_password) {
      return swal({ text: 'Preencha todos os campos', icon: 'error' });
    }

    if (password !== confirm_password) {
      return swal({ text: 'As senhas não coincidem', icon: 'error' });
    }

    try {
      const res = await axios.post('https://backtestmar.onrender.com/register', { username, password });
      swal({
        text: res.data.message || "Registrado com sucesso!",
        icon: "success",
      });
      this.props.history.push('/');
    } catch (err) {
      const msg =
        err.response?.data?.errorMessage ||
        err.message ||
        "Erro inesperado ao registrar usuário.";
      swal({ text: msg, icon: 'error' });
    }
  }

  render() {
    const { username, password, confirm_password } = this.state;
    const disableButton = !username || !password || !confirm_password || password !== confirm_password;

    return (
      <div style={{ marginTop: '150px', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2>Cadastrar Usuário</h2>

        <TextField
          fullWidth
          type="text"
          autoComplete="off"
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="Usuário"
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          autoComplete="off"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Senha"
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          autoComplete="off"
          name="confirm_password"
          value={confirm_password}
          onChange={this.onChange}
          placeholder="Confirmar Senha"
          margin="normal"
        />

        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            disabled={disableButton}
            onClick={this.register}
          >
            Registrar
          </Button>

          <Link href="/" style={{ marginLeft: 10 }}>
            Login
          </Link>
        </div>
      </div>
    );
  }
}

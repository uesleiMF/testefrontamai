import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  login = async () => {
    const { username, password, loading } = this.state;

    if (loading) return;

    if (!username || !password) {
      swal({ text: 'Preencha usuário e senha', icon: 'error' });
      return;
    }

    this.setState({ loading: true });

    try {
      const res = await axios.post('https://backtestmar.onrender.com/login', {
        username,
        password
      });

      const token = res?.data?.token;
      const id = res?.data?.id || res?.data?._id;

      if (!token) {
        swal({ text: 'Resposta do servidor não contém token.', icon: 'error' });
        this.setState({ loading: false });
        return;
      }

      localStorage.setItem('token', token);
      if (id) localStorage.setItem('user_id', id);

      swal({ text: 'Login realizado com sucesso!', icon: 'success' });

      this.props.history.push('/dashboard');

    } catch (err) {
      const msg =
        err?.response?.data?.errorMessage ||
        err?.message ||
        'Erro inesperado ao fazer login.';

      swal({ text: msg, icon: 'error' });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { username, password, loading } = this.state;

    return (
      <div className="login-container">

        <div className="login-card">
          <h2>Login</h2>

          <TextField
            fullWidth
            type="text"
            autoComplete="off"
            name="username"
            value={username}
            onChange={this.onChange}
            placeholder="Usuário"
            margin="dense"
          />

          <TextField
            fullWidth
            type="password"
            autoComplete="off"
            name="password"
            value={password}
            onChange={this.onChange}
            placeholder="Senha"
            margin="dense"
          />

          <div className="login-actions">
            <Button
              variant="contained"
              color="primary"
              onClick={this.login}
              disabled={!username || !password || loading}
              className="login-btn"
            >
              {loading ? 'Entrando...' : 'Login'}
            </Button>

            {loading && (
              <CircularProgress size={26} className="login-loading" />
            )}

            <Link href="/register" className="login-register-link">
              Registro
            </Link>
          </div>
        </div>
        
      </div>
    );
  }
}

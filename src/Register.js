import React, { Component } from 'react';
import swal from 'sweetalert';
import { Button, TextField, Link, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import "./Register.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm_password: '',
      loading: false
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  register = async () => {
    const { username, password, confirm_password } = this.state;

    if (!username || !password || !confirm_password) {
      swal({ text: "Preencha todos os campos!", icon: "error" });
      return;
    }

    if (password !== confirm_password) {
      swal({ text: "As senhas não coincidem!", icon: "error" });
      return;
    }

    this.setState({ loading: true });

    try {
      const res = await axios.post("https://backtestmar.onrender.com/register", {
        username,
        password
      });

      swal({ text: "Registrado com sucesso!", icon: "success" });

      this.props.history.push("/");

    } catch (err) {
      const msg =
        err?.response?.data?.errorMessage ||
        "Erro ao registrar usuário.";

      swal({ text: msg, icon: "error" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { username, password, confirm_password, loading } = this.state;

    return (
      <div className="register-container">

        <div className="register-card">
          <h2>Registro</h2>

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

          <TextField
            fullWidth
            type="password"
            autoComplete="off"
            name="confirm_password"
            value={confirm_password}
            onChange={this.onChange}
            placeholder="Confirmar senha"
            margin="dense"
          />

          <div className="register-actions">
            <Button
              variant="contained"
              color="primary"
              onClick={this.register}
              disabled={!username || !password || !confirm_password || loading}
              className="register-btn"
            >
              {loading ? "Registrando..." : "Registrar"}
            </Button>

            {loading && (
              <CircularProgress size={26} className="register-loading" />
            )}

            <Link href="/" className="register-login-link">
              Já tenho conta
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

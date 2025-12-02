import React from 'react';
import { Container, List, Logo } from "./NavbarStyles";
import { FaRegUser, FaHeartbeat } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from 'react-router-dom';
import c1 from "../../components/Img/ieq2.jpg";

export default function Navbar() {
  return (
    <Container>

      {/* Logo à esquerda */}
      <Logo>
        <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9" target="_blank" rel="noopener noreferrer">
          <img src={c1} alt="logo" />
        </a>
      </Logo>

      {/* Apenas ícones clicáveis */}
      <List>
        <li>
          <Link to="/home">
            <FaHeartbeat />
          </Link>
        </li>

        <li>
          <Link to="/sobrenos">
            <ImManWoman />
          </Link>
        </li>

        <li>
          <Link to="/app">
            <GiMusicalNotes />
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaRegUser />
          </Link>
        </li>
      </List>

    </Container>
  );
}

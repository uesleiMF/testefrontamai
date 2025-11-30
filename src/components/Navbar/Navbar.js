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

      <List>
        <li>
          <FaHeartbeat />
          <Link to="/home">Página Inicial</Link>
        </li>

        <li>
          <ImManWoman />
          <Link to="/sobrenos">Sobre Nós</Link>
        </li>

        <li>
          <GiMusicalNotes />
          <Link to="/app">Hinos Gospel</Link>
        </li>

        <li>
          <FaRegUser />
          <Link to="/">Login</Link>
        </li>
      </List>

      <Logo>
        <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
          <img src={c1} alt="logo" />
        </a>
      </Logo>

    </Container>
  );
}

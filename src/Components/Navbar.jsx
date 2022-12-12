import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logowhite from '../imgs/logo-white.png';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logowhite} alt="Leet Guitar Logo" />
      </Link>
      <ul>
        <CustomLink to="/" value="Main">
          Main
        </CustomLink>
        <CustomLink to="/practicelog" value="Practice Log">
          Practice Log
        </CustomLink>
        <CustomLink to="/user" value="User">
          User
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, childen, ...props }) {
  const path = window.location.pathname;
  // const useResolvedPath = useResolvedPath(to);
  // const isActive = useMatch({ path: useResolvedPath.pathname, end: true });
  return (
    <li className={path === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {props.value}
      </Link>
    </li>
  );
}

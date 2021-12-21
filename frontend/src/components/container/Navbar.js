import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {

    const auth = useAuth();
    const perfil = "";
    if (auth.isLogged()) {
        let perfil = auth.user.perfil;
    }

    console.log(perfil);
    console.log(auth);

    const navigate = useNavigate();

    const handleLogout = () => {

        auth.logout();

        navigate('/', {
            replace: true
        })

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <h1
                className="navbar-brand"
            >
                Gestor de Proyectos
            </h1>

            <div className="navbar-collapse">
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/usuarios"
                >
                    Usuarios
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos"
                >
                    Proyectos
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos"
                >
                    Inscripciones
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/proyectos"
                >
                    Avances
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/admin"
                >
                    Admin
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/lider"
                >
                    Lider
                </NavLink>
            </div>

            <div className="navbar-collapse">
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/registro"
                >
                    Registro
                </NavLink>
                <NavLink
                    className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                    to="/login"
                >
                    Login
                </NavLink>
            </div>

            {
                auth.isLogged() &&

                <div className="navbar-collapse collapse w-40 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <NavLink className="btn btn-primary mr" to={`/usuarios/${auth.user.usuario}`}>
                            Mis Datos
                        </NavLink>

                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar
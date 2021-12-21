import { useQuery } from '@apollo/client';
import React from 'react'
import { NavLink } from 'react-router-dom'
import GET_USUARIOS from '../../../Apollo/gql/getUsuarios';

import '../usuarios.css';

const ListarUsuarios = () => {

    const { loading, data, error } = useQuery(GET_USUARIOS);

    const handleDelete = (id) => {
        console.log('delete');
    }

    return (
        <>
            {loading && <p>Cargando ...</p>}
            {error && <p>Se ha producido un error</p>}
            {data &&
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Completo</th>
                            <th scope="col">Identificación</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Usuarios.map((usuario, index) => (
                                <tr key={usuario.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{usuario.nombreCompleto} </td>
                                    <td>{usuario.identificacion} </td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.rol} </td>
                                    <td>{usuario.estado} </td>
                                    <td>
                                        <NavLink className="btn btn-primary mr" to={`/usuarios/${usuario.id}`}>
                                            Editar
                                        </NavLink>
                                        <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }

        </>
    )
}

export default ListarUsuarios

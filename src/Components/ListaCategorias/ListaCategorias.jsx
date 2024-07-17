import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { buscar } from '../../api/api'
import "./ListaCategorias.css"

const ListaCategorias = () => {

    const [categorias, setcategoria] = useState([]);

    useEffect(() => {
        buscar(`/categorias`, setcategoria)
    }, [])

    return (
        <ul className="category-list">
            {
                categorias.map(categoria => (
                    <Link to={`/categorias/${categoria.id}`} key={categoria.id}>
                        <li className="lista">
                            {categoria.category}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaCategorias;
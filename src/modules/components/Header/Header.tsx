import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';


export const Header = () =>{

    return(
        <header>
            <div className="container-nav">

            <img src="./img/logo.png" alt="" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Filmes</Link>
                    </li>
                    <li>
                        Contacto
                    </li>
                </ul>
            </nav>
            </div>
            <div className="container-user">
                <img src="./img/icon-search.png" alt="" />
                <img src="./img/usuario-de-perfil.png" alt="" className="user" />
            </div>
        </header>
    );
}
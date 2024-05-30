import React, { useState } from "react";
import './Header.css';


export const Header = () =>{
    const [age, setAge] = useState(28);
    const [msj, setMsj] = useState('te amo mucho yuliana oxox');


    return(
        <header>
            <div className="container-nav">

            <img src="./img/logo.png" alt="" />
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Filmes
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
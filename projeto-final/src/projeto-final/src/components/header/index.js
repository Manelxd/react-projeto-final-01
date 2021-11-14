import React from "react";
import "./style.css"
import Img from "../../assets/logo2.0.gif"

export default function Header(){
    return(

        <header className="container-nav">
               <div className="box-logo">
                    <img src={Img} alt="" />
                </div>
                <ul className="box-menu">
                    <li>Home</li>
                    <li>Sobre </li>
                    <li>Localizações</li>
                    <li>Personagens</li>
                </ul>
        </header>
    )
}
import React from "react";
import "./Footer.css";
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="quienes-somos">
                <h4>¿Quiénes Somos?</h4>
                <p>Neocinema es empresa líder en entretenimiento, con más de 23 años en el mercado, se encuentra posicionado en el Top 10 de las mejores cadenas cinematográficas del mundo. Nuestra misión es dar a nuestros invitados la mejor experiencia de entretenimiento, basada en el esfuerzo, talento y compromiso de todos, generando valor, innovación y mucha diversión.</p>
            </div>
            <div className="contacto-container">
                <div className="contacto">
                    <h4>Contacto:</h4>
                    <p>José Carlos Ochoa Taboada</p>
                    <p>18170412</p>
                    <p>jose8adev@gmail.com</p>
                </div>
                <div className="contacto">
                    <p>Yuliana Paola Arredondo Armenta</p>
                    <p>20170597</p>
                    <p>yulianachangarrito@gmail.com</p>
                </div>
                <div className="contacto">
                    <p>Daniel López</p>
                    <p>20170577</p>
                    <p>dldaniel201@gmail.com</p>
                </div>
            </div>
            <div className="legales">
                <h4>Legales:</h4>
                <p>Esto es un proyecto ilustrativo</p>
            </div>
        </footer>
    );
}

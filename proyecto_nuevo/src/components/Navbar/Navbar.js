import React from "react"
import "./Navbar.css"

const Navbar =()=>{

    return(
    <section className="navbar">
        <section className="nav_logo">
       
        </section>
        <section className="nav_items">
            <li><a href="#">INICIO</a></li>            
            <li><a href="#">PRODUCTOS</a>
                <ul>
                    <li><a href="#">Prefumeria</a></li>
                    <li><a href="#">Bisuteria</a></li>
                    <li><a href="#">Velas</a></li>
                    <li><a href="#">Aseo Hogar</a></li>
                </ul>
            </li>            
            <li> <a href="#">CURSOS</a></li>           
            <li><a href="#">CONTACTENOS</a></li>            
            <li> <a href="#">ALIADOS</a>
            <ul>
                    <li><a href="#">Artimaña</a></li>
                    <li><a href="#">Empresa de Juan </a></li>
                    <li><a href="#">Empresa de mauricio</a></li>
                    <li><a href="#">Empresa de Camila</a></li>
                </ul></li>           
          
        </section>
        {/* <section className="redes">
          
                <li><a href="#" className="icon-mail4"></a>mail4</li>
                <li><a href="#" className="icon-whatsapp"></a>whatsapp</li>
                <li><a href="#" className="icon-facebook"></a>facebook</li>
                <li><a href="#" className="icon-instagram"></a>instagram</li>
                <li><a href="#" className="icon-google-plus"></a>google-plus</li>
                <li><a href="#" className="icon-twitter"></a>twitter</li>
                <li><a href="#" className="icon-youtube2"></a>youtube2</li>
            
        </section> */}
        <section className="toggle">
            <span></span>
            <span></span>
            <span></span>
        </section>
    </section>

    )
}
export default Navbar
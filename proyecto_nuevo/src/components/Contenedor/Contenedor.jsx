import React from "react";
import "../Contenedor/Contenedor.css";
// import imagenes from '/proyecto_nuevo/src/components/Contenedor';
import imagenes from '../../components/Imagenes/index';
const Contenedor =()=> {
  return (
            <section className="img">
              <section className="img one">
                {/* <h1>Caja 1</h1> */}
                <img src={imagenes.Llavero} alt="Llavero" />
              </section>
              <section className="img two">
                <h1>Caja 2</h1>
              </section>
              <section className="img three">
                <h1>Caja 3</h1>
              </section>
              <section className="img four">
                <h1>Caja 4</h1>
              </section>
              <section className="img five">
                <h1>Caja 5</h1>
              </section>
              <section className="img six">
                <h1>Caja 6</h1>
              </section>
            </section>
  );
};
export default Contenedor;
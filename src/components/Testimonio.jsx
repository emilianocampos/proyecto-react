import React from "react";
import '../css/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img src={require(`../img/${props.imagen}.jpg`)} alt="foto cara" className="img-testimonio" style={{width:300}}/>
      <div className="contendor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong></p>
        <p className="cargo-testimonio">{props.trabajo} en {props.empresa} </p>
        <p className="text-testimonio">{props.testimonio}</p>
      </div>
    </div>

  );

} 
export default Testimonio;
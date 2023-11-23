import React from "react";

function Articulo(){
    return(
        <div className="contenedor-principal">
            <div className="contenedor-articulo">
                <img className="imagen-articulo" src = {require('../imagenes/lavarropas.jpg')} alt="imagen lavarropas" />
                <div className="contenedor-detalle">
                    <p className="codigo-articulo">Codigo del producto: <strong>1121</strong> </p>
                    <p className="nombre-articulo">Nombre del Producto: Lavarropas Automatico</p>
                    <p className="marca-articulo">Marca: Samsung</p>
                    <p className="detalle-articulo">Detalle: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ipsam nobis quidem deserunt</p>
                </div>    
            </div>
        </div>
    );
}
export default Articulo
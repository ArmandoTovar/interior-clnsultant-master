

import Draggable from 'react-draggable';
import 'bootstrap/dist/css/bootstrap.min.css';

import Proptypes from 'prop-types';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Mensaje.css';

import React, { useState } from "react";

function Mensaje({ name, image, prof, desc }) {
  
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
            setPosition({ x: data.x, y: data.y });
        
    };
    return (

        <Draggable onDrag={(e, data) => trackPos(data)} >
            <div class="ContenedorMensaje">
                <div class="Fondo">
            <img class="FotoCir rounded-circle"
                        alt="85x72"
                        src={image} />
                 
               
             
            <p class="TextName">{name}</p>
            <p class="TextProf">{prof}</p>
                    <p class="TextoDesc">{desc}  
                    </p>
                   
            
                       </div>
            </div>
          
        </Draggable>
    );
}
Mensaje.propTypes = {
    name: Proptypes.string,
    prof: Proptypes.string,
    desc: Proptypes.string,
    image: Proptypes.string
};
export default Mensaje;

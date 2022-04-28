
import { Container,Col , Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';

import Proptypes from 'prop-types';
import './Cuerpo.css';
import resolution from './Resolution.js'
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Cuerpo({ image , title, desc} ) {
    return (
        <Container>

            <Row>
                <Col sm={4} class="col-4 mh-100">

                    <div class="row h-100">
                      
                        
                        <div class={resolution().width <= 992 ? "d-none" : "col-sm-12 h-50"}>
                    
                           
                        </div>
                        <div class="col-sm-12 h-10">
                            <div class="titulo">
                            <p className="font-weight-bold"> {title}</p>
                               </div>
                         </div>
                 

                        <div class="col-sm-12 h-20">
                            <div class="desc">
                                <p class="text-justify"> {desc}</p>
                            </div>
                        </div>
                        <div class="col-sm-12 h-20">
                           
                                    <p className="font-weight-bold"> Read more</p>
                                    <p className="font-wei ht-bold bi-arrow-right"></p>
                            
                          

                        </div>
                    </div>
                
                </Col>
                <Col sm={8} class="col-8">
                    <Figure>
                        <Figure.Image
                           
                            width= {737}
                             height= {555}
                            alt="821x586"
                            src={image }
                        />
                        <Figure.Caption>
                          </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
}
Cuerpo.propTypes = {
    title: Proptypes.string,
    desc: Proptypes.string,
    image: Proptypes.string
};
export default Cuerpo;

import React from "react";
import "./cards.css"
import aston from "../../img/aston.jpg"
import ferrari from "../../img/ferrari.jpg"
import lambo from "../../img/lambo.jpg"
import porche from "../../img/porche.jpg"


const Cards = () => {
    return (
        <div className="d-flex justify-content-evenly">
            <div class="card tarjeta" >
                <img src={aston} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="center">
                        <a href="#" class="btn btn-primary">Find Out More</a>
                    </div>
                </div>
            </div>
            <div class="card tarjeta" >
                <img src={ferrari} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="center">
                        <a href="#" class="btn btn-primary">Find Out More</a>
                    </div>
                </div>
            </div>
            <div class="card tarjeta" >
                <img src={lambo} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="center">
                        <a href="#" class="btn btn-primary">Find Out More</a>
                    </div>
                </div>
            </div>
            <div class="card tarjeta" >
                <img src={porche} class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="center">
                        <a href="#" class="btn btn-primary">Find Out More</a>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Cards;

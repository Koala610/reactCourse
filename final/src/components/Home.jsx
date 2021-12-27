import React from 'react'
import Product from './Product'

import './Home.css'

const Home = () => {
    return (
        <div class="pukich">
        <div >
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FSamsung-Logo.png&f=1&nofb=1" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png&f=1&nofb=1" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-marques.com%2Fwp-content%2Fuploads%2F2021%2F01%2FXiaomi-logo.png&f=1&nofb=1" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2016%2F05%2Frainbow-apple-logo.png&f=1&nofb=1" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>

                </div>
                    

                    )
}

                    export default Home

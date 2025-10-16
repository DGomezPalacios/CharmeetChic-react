import React from 'react';

// aros
import arosCorazon from '../assets/img/Aros Corazon.jpg';
import aroLargo from '../assets/img/Aro largo.jpg';
import aroPendulo from '../assets/img/Aro pendulo.jpg';
import aroAbanico from '../assets/img/Aros abanico.jpg';

// anillos
import anilloLuna from '../assets/img/Anillo luna.jpg';
import anilloEngaste from '../assets/img/Aniillo engaste piedritas.jpg';
import anilloPiedras from '../assets/img/Anillos piedras.jpg';
import anilloGotas from '../assets/img/Anillo gotas.jpg';

// collares
import collarPerlas from '../assets/img/Collar perlas.jpg';
import collarCircular from '../assets/img/Collar circular.jpg';
import collarEstrella from '../assets/img/Collar estrella.jpg';
import collarLunaEstrella from '../assets/img/Collar luna estrella.jpg';

// pulseras
import pulsera1 from '../assets/img/Pulsera1.jpg';
import pulseraOlas from '../assets/img/Pulseras olas plata.jpg';
import pulseraPlata2 from '../assets/img/Pulseras plata 2.jpg';
import pulseraPlata from '../assets/img/Pulseras plata.jpg';

// tocados
import tocado1 from '../assets/img/Tocado1.jpg';
import accesorio2 from '../assets/img/Accesorio pelo2.jpg';
import accesorio3 from '../assets/img/Accesorio pelo3.jpg';
import accesorio4 from '../assets/img/Accesorio pelo4.jpg';

export default function Catalog() {
    return (
        <div className="catalogo">
            <h2 className="titulo-seccion">Nuestro Catálogo</h2>

            {/* Aros */}
            <details>
                <summary>Aros</summary>
                <div className="productos">
                    <div className="producto">
                        <img src={arosCorazon} alt="Aros Corazones" />
                        <p className="nombre">Aros de Corazones</p>
                        <p className="precio">$8.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={aroLargo} alt="Aro de Plata con Dijes" />
                        <p className="nombre">Aros de Plata con Dijes</p>
                        <p className="precio">$8.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={aroPendulo} alt="Aros con Péndulo Amatista" />
                        <p className="nombre">Aros con Péndulo Amatista</p>
                        <p className="precio">$8.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={aroAbanico} alt="Aros Abanico" />
                        <p className="nombre">Aros Abanico</p>
                        <p className="precio">$8.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </details>

            {/* Anillos */}
            <details>
                <summary>Anillos</summary>
                <div className="productos">
                    <div className="producto">
                        <img src={anilloLuna} alt="Anillo Luna" />
                        <p className="nombre">Anillo Luna</p>
                        <p className="precio">$20.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={anilloEngaste} alt="Anillo de Plata Engaste Piedra" />
                        <p className="nombre">Anillo de Plata Engaste Piedra</p>
                        <p className="precio">$30.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={anilloPiedras} alt="Anillos Amatista" />
                        <p className="nombre">Anillos Amatista</p>
                        <p className="precio">$35.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={anilloGotas} alt="Anillo de Plata" />
                        <p className="nombre">Anillo de Plata</p>
                        <p className="precio">$30.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </details>

            {/* Collares */}
            <details>
                <summary>Collares</summary>
                <div className="productos">
                    <div className="producto">
                        <img src={collarPerlas} alt="Collar de Perlas" />
                        <p className="nombre">Collar de Perlas</p>
                        <p className="precio">$15.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={collarCircular} alt="Collar de Plata con dige" />
                        <p className="nombre">Collar de Plata con dige</p>
                        <p className="precio">$25.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={collarEstrella} alt="Collar de Plata con Estrella" />
                        <p className="nombre">Collar de Plata con Estrella</p>
                        <p className="precio">$30.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={collarLunaEstrella} alt="Collar de Plata Luna y Estrella" />
                        <p className="nombre">Collar de Plata Luna y Estrella</p>
                        <p className="precio">$35.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </details>

            {/* Pulseras */}
            <details>
                <summary>Pulseras</summary>
                <div className="productos">
                    <div className="producto">
                        <img src={pulsera1} alt="Pulsera de Plata con Charms de Niños" />
                        <p className="nombre">Pulsera de Plata con Charms de Niños</p>
                        <p className="precio">$20.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={pulseraOlas} alt="Pulsera con olas de plata" />
                        <p className="nombre">Pulsera con olas de plata</p>
                        <p className="precio">$20.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={pulseraPlata2} alt="Pulsera de Plata" />
                        <p className="nombre">Pulseras de Plata</p>
                        <p className="precio">$30.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={pulseraPlata} alt="Pulseras de plata" />
                        <p className="nombre">Pulseras de Plata</p>
                        <p className="precio">$20.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </details>

            {/* Tocados */}
            <details>
                <summary>Tocados</summary>
                <div className="productos">
                    <div className="producto">
                        <img src={tocado1} alt="Tocado de Flores" />
                        <p className="nombre">Tocado de Flores</p>
                        <p className="precio">$50.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={accesorio2} alt="Accesorio de Novia" />
                        <p className="nombre">Accesorio Novia</p>
                        <p className="precio">$50.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={accesorio3} alt="Accesorio Novia" />
                        <p className="nombre">Accesorio Novia</p>
                        <p className="precio">$40.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                    <div className="producto">
                        <img src={accesorio4} alt="Accesorio Novia Dorado" />
                        <p className="nombre">Tocado Dorado</p>
                        <p className="precio">$40.000</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            </details>
        </div>
    );
}

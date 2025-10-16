import taller from '../assets/img/taller.png';

export default function AboutUs() {
    return (
        <div className="seccion">
            <h2>Quiénes Somos</h2>
            <p>
                En <strong>Charme et Chic</strong> creemos que cada joya guarda una historia.
                Nacimos como un emprendimiento de <em>joyería artesanal</em> con la misión de
                combinar elegancia, creatividad y dedicación en cada pieza.
            </p>
            <p>
                Nos especializamos en <em>creación, personalización y reparación</em> de joyas,
                buscando que cada diseño sea único y refleje la identidad de quien lo lleva.
            </p>
            <p>
                Nuestro equipo está comprometido con ofrecer un servicio cercano y de calidad,
                acompañando a nuestros clientes en cada momento especial con piezas que perduran.
            </p>
            <img src={taller} alt="Taller Charme et Chic" />
        </div>
    );
}

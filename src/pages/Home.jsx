import collarCorazon from '../assets/img/Collar corazon.jpg';

export default function Home() {
    return (
        <section className="seccion">
            <h2>Bienvenidos a nuestra tienda</h2>
            <p>Joyería artesanal, personalización y reparación con cariño y detalle.</p>
            <img src={collarCorazon} alt="Joyería exclusiva" />


        </section>
    );
}

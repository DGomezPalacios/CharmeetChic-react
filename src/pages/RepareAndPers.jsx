import reparacion from '../assets/img/Reparacion-png.png';
import personalizacion from '../assets/img/foto joyas personalizadas.jpg';

export default function RepareAndPers() {
    return (
        <>
            <div className="seccion">
                <h2>Personalización de Joyas</h2>
                <p>
                    Haz que tu joya sea única. Graba iniciales, fechas especiales o diseña junto
                    a nosotros una pieza exclusiva.
                </p>
                <img src={personalizacion} alt="Joyas personalizadas" />

            </div>

            <div className="seccion">
                <h2>Reparación de Joyas</h2>
                <p>¿Tu joya favorita está dañada? Nuestros expertos la restauran con el mayor cuidado y detalle.</p>
                <img src={reparacion} alt="Reparación de joyas" />

            </div>
        </>
    );
}

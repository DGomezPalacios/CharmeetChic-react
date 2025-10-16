import joyasPersonalizadas from '../assets/img/foto joyas personalizadas.jpg';
import reparacionJoyas from '../assets/img/Reparacion-png.png';

export default function RepareAndPers() {
    return (
        <>
            <div className="seccion">
                <h2>Personalización de Joyas</h2>
                <p>
                    Haz que tu joya sea única. Graba iniciales, fechas especiales o diseña junto
                    a nosotros una pieza exclusiva.
                </p>
                <img src={joyasPersonalizadas} alt="Joyas Personalizadas" />
            </div>

            <div className="seccion">
                <h2>Reparación de Joyas</h2>
                <p>¿Tu joya favorita está dañada? Nuestros expertos la restauran con el mayor cuidado y detalle.</p>
                <img src={reparacionJoyas} alt="Reparación de Joyas" />
            </div>
        </>
    );
}

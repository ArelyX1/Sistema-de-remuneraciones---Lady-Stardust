import { useNavigate } from 'react-router-dom';
import "./Welcome.css";
import logo from "./assets/logoWayruSoft.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <header className="welcome-header">
        <h1 className="welcome-title">WAYRU SOFT</h1>
        <div className="welcome-buttons">
          <button className="btn" onClick={() => navigate('/login')}>Ingresa</button>
          <button className="btn">Regístrate</button>
        </div>
      </header>

      <section className="welcome-main">
        <div className="welcome-text">
          <h2>Soluciones inteligentes para tu negocio</h2>
          <p>Optimiza tus procesos con nuestro sistema de ventas fácil, rápido y seguro.</p>
          <p>Controla tu inventario, factura sin límites y toma decisiones basadas en datos.</p>
          <p>Somos WAYRU SOFT. Sembramos soluciones, cultivamos sistemas.</p>
        </div>
        <div className="welcome-logo">
          <img src={logo} alt="WAYRU LOGO" />
        </div>
      </section>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import "./DashboardSummary.css";

export default function DashboardSummary() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard">
      {/* Header superior igual al del Welcome */}
      <header className="welcome-header">
        <h1 className="welcome-title">WAYRU SOFT</h1>
        <div className="welcome-buttons">
          <button className="btn" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </header>

      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <button onClick={() => navigate('/empleados')} className="sidebar-btn">Empleados</button>
            <button onClick={() => navigate('/pagos')} className="sidebar-btn">Pagos</button>
            <button onClick={() => navigate('/deducciones')} className="sidebar-btn">Deducciones</button>
            <button onClick={() => navigate('/bonificaciones')} className="sidebar-btn">Bonificaciones</button>
            <button onClick={() => navigate('/boletas')} className="sidebar-btn">Boletas</button>
            <button onClick={() => navigate('/consulta')} className="sidebar-btn">Consulta de boletas</button>

          </nav>
        </aside>
        {/* Contenido central */}
        <main className="main-content">
          <section className="welcome-section">
            <h1 className="welcome-title-main">¡Bienvenido, Rosario!</h1>
            <p className="welcome-subtitle-main">Sistema de Gestión de Remuneraciones</p>
          </section>

          {/* Tarjetas resumen */}
          <section className="summary-cards">
            <div className="card">👤 Usuarios: <strong>4</strong></div>
            <div className="card">👷 Empleados: <strong>38</strong></div>
            <div className="card">💸 Pagos: <strong>23</strong></div>
            <div className="card">🧾 Boletas: <strong>20</strong></div>
          </section>

          {/* Últimas acciones */}
          <section className="actions-section">
            <h2 className="actions-title">Últimas acciones</h2>
            <ul className="actions-list">
              <li>✔ Se generó boleta para Mariana P.</li>
              <li>📝 Se editó deducción de movilidad</li>
              <li>➕ Nuevo empleado: Luis A.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

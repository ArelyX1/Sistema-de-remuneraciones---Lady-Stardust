import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// Placeholder for Pagos Pendientes
function PendingPaymentsPlaceholder() {
  return (
    <div className="placeholder-box">
      Próximamente
    </div>
  );
}

// Placeholder for Detalles
function DetailsPlaceholder() {
  return (
    <div className="placeholder-box">
      Próximamente
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Nombre de usuario" />
      <main>
        <Topbar />
        <div className="dashboard-content">
          <section className="pending-payments">
            <h2>Pagos Pendientes:</h2>
            <PendingPaymentsPlaceholder />
          </section>
          <section className="details">
            <h2>Detalles</h2>
            <DetailsPlaceholder />
          </section>
        </div>
      </main>
    </div>
  );
}

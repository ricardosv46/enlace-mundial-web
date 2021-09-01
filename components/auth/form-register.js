import React from "react";

export default function FormRegister() {
  return (
    <section>
      <div className="form-group">
        <input type="text" placeholder="Nombres" className="form-control" />
      </div>

      <div className="form-group">
        <input type="text" placeholder="Apellidos" className="form-control" />
      </div>

      <div className="form-group">
        <input type="email" placeholder="Correo" className="form-control" />
      </div>

      <div className="form-group">
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
        />
      </div>
    </section>
  );
}

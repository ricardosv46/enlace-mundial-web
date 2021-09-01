import React from "react";

export default function FormLogin() {
  return (
    <section>
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

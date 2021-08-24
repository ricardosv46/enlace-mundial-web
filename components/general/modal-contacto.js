import React from "react";

export default function ModalContacto() {
  return (
    <section className="modal-contacto d-md-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h3 className="modal-contacto__titulo">¿Necesitas ayuda?</h3>

        <p>Ponte en contacto con uno de nuestros asesores</p>
      </div>

      <div className="container mt-3">
        <div className="row justify-content-lg-between">
          <div className="col-lg-5 d-flex justify-content-around justify-content-lg-between">
            <img
              src="https://www.concur.com.mx/sites/default/files/mx/support-customer-service-call_0.jpg"
              className="modal-contacto__avatar img-fluid"
            />

            <div className="text-center">
              <h4 className="small text-blue font-weight-bold">User support</h4>
              <button
                type="button"
                className="btn btn-primary py-1 position-relative"
              >
                <img
                  src="/imagenes/redes-sociales/whatsapp.png"
                  className="modal-contacto__icono"
                />
                Contactar
              </button>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-around justify-content-lg-between mt-4 mt-lg-0">
            <img
              src="https://www.concur.com.mx/sites/default/files/mx/support-customer-service-call_0.jpg"
              className="modal-contacto__avatar img-fluid"
            />

            <div className="text-center">
              <h4 className="small text-blue font-weight-bold">User support</h4>
              <button
                type="button"
                className="btn btn-primary py-1 position-relative"
              >
                <img
                  src="/imagenes/redes-sociales/whatsapp.png"
                  className="modal-contacto__icono"
                />
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

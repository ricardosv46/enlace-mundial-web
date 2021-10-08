import react from "react";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function SidebarCuenta() {
  return (
    <div
      className={`${styles.sidebarCuenta_card} shadow-card d-flex flex-column justify-content-center align-items-center py-3`}
    >
      <img
        src="https://i.pinimg.com/280x280_RS/3b/32/47/3b3247c707f4006002364ecd4ec3f124.jpg"
        className={`${styles.sidebarCuenta_imagen}`}
      />

      <div className="mt-3 text-center w-100">
        <h2 className="font-weight-bold">Erick HL</h2>

        <Link href="/mi-cuenta/editar" passHref>
          <a className="btn btn-outline-primary mt-2 px-3">Editar cuenta</a>
        </Link>

        <section className="w-75 mt-4 mx-auto">
          <Link href="/mi-cuenta" passHref>
            <a className="btn btn-light btn-block font-weight-bold text-left mt-2 px-3 rounded-0">
              Mi cuenta
            </a>
          </Link>

          <Link href="/mi-cuenta/reservas" passHref>
            <a className="btn btn-light btn-block font-weight-bold text-left mt-2 px-3 rounded-0">
              Reservas
            </a>
          </Link>

          <Link href="/mi-cuenta/editar" passHref>
            <a className="btn btn-light btn-block font-weight-bold text-left mt-2 px-3 rounded-0">
              Preferencias
            </a>
          </Link>

          <button type="button" className="btn btn-danger btn-block mt-4">
            Salir
            <i className="fas fa-sign-out-alt ml-1"></i>
          </button>
        </section>
      </div>

      <nav></nav>
    </div>
  );
}

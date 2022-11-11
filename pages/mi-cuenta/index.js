import react, { useContext, useEffect, useState } from "react"
import { useScreenContext } from '../../context/screen'
import styles from "./styles.module.scss"
import Head from "next/head"
// Components
import SidebarCuenta from "@/components/mi-cuenta/sidebar"
import { ContextAuth } from "../../context/ContextAuth"
import { useRouter } from "next/router"
import { Screen_Data } from "../../context/screen/data"
import { dataOG } from "../../data/dataOG"
import OpenGraph from "../../components/openGraph"

const MiCuenta = () => {
  const router = useRouter()
  const contextAuth = useContext(ContextAuth)
  const { dataUser: usuario, auth, setShow } = contextAuth
  const { DispatchScreen } = useScreenContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!auth) {
      router.push("/")
      setShow(true)
    } else {
      setLoading(false)
    }
    return () => {
      setLoading(true)
    }
  }, [auth])

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle',
      payload: 'Mi Cuenta',
    })
  }, [])

  if (loading) {
    return <div className={styles.todo}></div>
  }

  return (
    <>

      <OpenGraph {...{
        title: `Mi Cuenta - ${dataOG.tittle}`,
        keyword: '',
        description: dataOG.description,
        url: `${dataOG.url}/mi-cuenta`,
        img: dataOG.logo,
      }} />

      <section className={`${styles.miCuenta} container mt-4 mt-md-5`}>
        <div className='row justify-content-around'>
          <div className='col-md-4'>
            <SidebarCuenta />
          </div>

          <div className='col-md-7 mt-4 mt-md-0'>
            <div className='p-3 shadow-card'>
              <h3 className='subtitulo-general font-weight-bold text-left'>
                Información personal
              </h3>

              <section className='mt-3'>
                <div className={`${styles.miCuenta_borderItem} pb-2`}>
                  <h4 className='small font-weight-bold'>
                    Nombres y apellidos
                  </h4>

                  <p>
                    {usuario?.nombre} {usuario?.apellidos}
                  </p>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-3`}>
                  <h4 className='small font-weight-bold'>
                    Tipo y N° de documento
                  </h4>

                  <p>
                    {usuario?.tipoDocumento} : {usuario?.numDocumento}
                  </p>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-3`}>
                  <h4 className='small font-weight-bold'>
                    Dirección de correo electrónico
                  </h4>

                  <p>{usuario?.email}</p>
                </div>

                <div className={`${styles.miCuenta_borderItem} mt-4 pb-3`}>
                  <h4 className='small font-weight-bold'>Número de contacto</h4>

                  <p>{usuario?.celular}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default MiCuenta

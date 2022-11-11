import Head from "next/head"

import Form from "react-bootstrap/Form"
import { Formik } from "formik"

import { validations } from "../../validaciones/form-contact"

import RedesSociales from "@/components/general/redes-sociales"
import ErrorMessage from "@/components/general/ErrorMessage"
import { ContactAnimate } from "../../lotties/components/ContactAnimate"
import { useEffect } from "react"
import { useScreenContext } from "../../context/screen"
import OpenGraph from "../../components/openGraph"
import { dataOG } from "../../data/dataOG"

export default function Contacto() {
  const initialValues = {
    name: "",
    email: "",
    numberContact: "",
    message: "",
  }

  const { DispatchScreen } = useScreenContext()

  useEffect(() => {
    DispatchScreen({
      type: 'ChangeSubTittle', payload: 'Contáctanos'
    })
  }, [])

  return (
    <div className='contacto'>

      <OpenGraph
        {...{
          title: `Contáctanos - ${dataOG.tittle}`,
          keyword: '',
          description: 'No dudes en contactarnos para consultar sobre nuestros servicios.',
          url: `${dataOG.url}/contacto`,
          img: dataOG.logo
        }}
      />

      <section className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-7 text-center'>
            <h1 className='contacto__titulo font-weight-bold'>Contáctanos</h1>

            <p className='contacto__subtitulo'>
              No dudes en contactarnos para consultar sobre nuestros servicios.
            </p>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-md-6 px-md-5'>
            <Formik
              initialValues={initialValues}
              validationSchema={validations}
              onSubmit={(values, { setSubmitting, validateForm }) => {
                if (validateForm(values)) {
                  alert(JSON.stringify(values, null, 2))
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label>Nombres y apellidos</Form.Label>
                    <Form.Control
                      type='text'
                      id='name'
                      name='name'
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <ErrorMessage {...{ errors, touched, name: "name" }} />
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type='email'
                      id='email'
                      name='email'
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <ErrorMessage {...{ errors, touched, name: "email" }} />
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type='number'
                      id='numberContact'
                      name='numberContact'
                      value={values.numberContact}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <ErrorMessage
                      {...{ errors, touched, name: "numberContact" }}
                    />
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows={3}
                      id='message'
                      name='message'
                      value={values.message}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <ErrorMessage {...{ errors, touched, name: "message" }} />
                  </Form.Group>

                  <div className='text-right'>
                    <input
                      type='submit'
                      value='Enviar mensaje'
                      className='btn btn-lg btn-primary px-4'
                    />
                  </div>
                </form>
              )}
            </Formik>
            <div>
              {/* <div className='text-right'>
                <img
                  src='/logo.png'
                  alt='Picture of the author'
                  className='nosotros__logo'
                />
              </div> */}
              <section className='mt-3'>
                {/* <span className='text-muted'>O si prefires</span> */}
                <div className='mt-2'>
                  <span className='text-primary'>
                    <i className='fas fa-mobile-alt'></i>
                  </span>
                  <span className='d-inline-block ml-2'>999 123 456</span>
                </div>
                <div className='mt-3'>
                  <span className='text-primary'>
                    <i className='far fa-envelope-open'></i>
                  </span>
                  <span className='d-inline-block ml-2'>
                    contacto@enlacemundial.com
                  </span>
                </div>

                {/* <section className='mt-3'>
                  <RedesSociales />
                </section> */}
              </section>
            </div>
          </div>

          <div className='col-md-6'>
            <div className="flex flex-column">
              <div className=""><ContactAnimate /></div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

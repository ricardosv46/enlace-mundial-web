export const BreadCrumb = ({ NombreDepartamento = undefined, breadcrumb }) => {
    return (
        <section className='container mt-5 px-4 px-md-0'>
            <div className='row'>
                <div className='col-12'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h3 className='subtitulo-slug text-secondary text-left'>
                            {NombreDepartamento
                                ? `Tours a región ${NombreDepartamento}`
                                : "Tours a regiones del Perú"}
                        </h3>

                        {/* Solo desktop */}
                        <div className='d-none d-md-flex gap-2'>
                            {breadcrumb.map((obj, k) => obj.length > 0 ? (
                                <div key={k} >
                                    <span className='mx-2 border-primary d-inline-block'> {obj}</span>
                                    {k < breadcrumb.length - 1 ?
                                        <span>/</span>
                                        : null
                                    }
                                </div>
                            ) : null)}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

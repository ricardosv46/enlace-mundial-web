import useCategoriasServices from '../../../../gestion-de-endpoints/useCategoriasServices'

export const SecctionRadioCategorias = ({ handleChange, categoria }) => {
  const { dataCategoria, loadingCategoria} = useCategoriasServices()
  return (
    <div>
      <h3 className="card-title stext-secondary font-weight-bold mt-3">
        Categorias
      </h3>
      {loadingCategoria ? (
        <p>Cargando ...</p>
      ) : (
        dataCategoria.map((item) => {
          return (
            <div className="form-check" key={item?.categoriaId}>
              <input
                id={item?.categoriaId}
                className="form-check-input"
                type="radio"
                name="categorias"
                value={item?.slugCategoria}
                checked={categoria === item?.slugCategoria}
                onChange={(e) => {
                  handleChange('categoria', e.target.value)
                }}
              />
              <label className="form-check-label" htmlFor={item?.categoriaId}>
                {item?.tituloCategoria}
              </label>
            </div>
          )
        })
      )}
    </div>
  )
}

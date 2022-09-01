import { useIncluyeServices } from '../../../../gestion-de-endpoints/useIncluyeServices'

export const SecctionRadioIncluye = ({ handleChange, incluye }) => {
  const { db, loadingGetData } = useIncluyeServices()
  return (
    <div>
      <h3 className="card-title stext-secondary font-weight-bold mt-3">
        Incluye
      </h3>
      {loadingGetData ? (
        <p>Cargando ...</p>
      ) : (
        db.map((item) => {
          return (
            <div className="form-check" key={item?.incluyeId}>
              <input
                id={item?.incluyeId}
                className="form-check-input"
                type="radio"
                name="incluye"
                value={item?.descripcionIncluye}
                checked={incluye === item?.descripcionIncluye}
                onChange={(e) => {
                  handleChange('incluye', e.target.value)
                }}
              />
              <label className="form-check-label" htmlFor={item?.incluyeId}>
                {item?.descripcionIncluye}
              </label>
            </div>
          )
        })
      )}
    </div>
  )
}

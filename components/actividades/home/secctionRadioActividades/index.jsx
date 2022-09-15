import { useActividadesServices } from "../../../../gestion-de-endpoints/useActividadesServices";
import { SkeletorRadioButton, Show } from "../../../common";

export const SecctionRadioActividades = ({ handleChange, actividades }) => {
  const { db, loadingGetData } = useActividadesServices();
  return (
    <div>
      <Show Condition={!loadingGetData} IsDefault={<SkeletorRadioButton />}>
        <h3 className="card-title stext-secondary font-weight-bold mt-3">
          Actividades
        </h3>
        {db &&
          db.map((item) => {
            return (
              <div className="form-check" key={item?.actividadId}>
                <input
                  id={item?.actividadId}
                  className="form-check-input"
                  type="radio"
                  name="actividades"
                  value={item?.descripcion_actividad}
                  checked={actividades === item?.descripcion_actividad}
                  onChange={(e) => {
                    handleChange("actividades", e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor={item?.actividadId}>
                  {item?.descripcion_actividad}
                </label>
              </div>
            );
          })}
      </Show>
    </div>
  );
};

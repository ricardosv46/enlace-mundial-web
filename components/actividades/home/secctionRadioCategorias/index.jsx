import useCategoriasServices from "../../../../gestion-de-endpoints/useCategoriasServices";
import { SkeletorRadioButton, Show } from "../../../common";

export const SecctionRadioCategorias = ({ handleChange, categoria }) => {
  const { dataCategoria, loadingCategoria } = useCategoriasServices();
  return (
    <div>
      <Show Condition={!loadingCategoria} IsDefault={<SkeletorRadioButton />}>
        <h3 className="card-title stext-secondary font-weight-bold mt-3">
          Categorias
        </h3>
        {dataCategoria &&
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
                    handleChange("categoria", e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor={item?.categoriaId}>
                  {item?.tituloCategoria}
                </label>
              </div>
            );
          })}
      </Show>
    </div>
  );
};

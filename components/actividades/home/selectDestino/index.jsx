import { useState } from "react";
import { useDepartamentosServices } from "../../../../gestion-de-endpoints/useDepartamentosServices";
import Select from "react-select";
import { Show } from "../../../show";
import { SkeletorDropdown } from "../../../common";

export const SelectDestino = ({ DeparCodi }) => {
  const [select, setSelect] = useState({ value: "", label: "" });
  const { dataDepartamentos, loadingGetData } = useDepartamentosServices();

  const lugares =
    !loadingGetData &&
    dataDepartamentos.map((data) => ({
      value: data.DeparCodi,
      label: data.DeparNom,
    }));

  const lugar =
    !loadingGetData &&
    dataDepartamentos.filter((data) => data.DeparCodi === DeparCodi);

  let lugarSelect = {
    value: lugar[0]?.DeparCodi,
    label: lugar[0]?.DeparNom ? lugar[0]?.DeparNom : "Lugar",
  };
  return (
    <div className="mt-4">
      <Show Condition={!loadingGetData} IsDefault={<SkeletorDropdown />}>
        <Select
          options={lugares}
          placeholder="Lugar"
          value={select.value.length === 0 ? lugarSelect : select}
          onChange={(e) => {
            handleChange("DeparCodi", e.value);
            updateRouter("DeparCodi", e.value);
          }}
        />
      </Show>
    </div>
  );
};

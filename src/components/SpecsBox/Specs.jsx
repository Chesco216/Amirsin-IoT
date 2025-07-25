import { SpecsRow } from "./SpecsRow"

export const Specs = () => {

  const d = new Date
  const date = d.toString()

  return (
    <div className="h-fit p-[40px] border-1 border-slate-300 rounded-xl">
      <h3 className="font-semibold text-xl">Informacion de la deteccion</h3>
      <SpecsRow e={1} title='Ubicacion' desc='Camara estacion X'/>
      <SpecsRow e={2} title='Fecha y Hora' desc={date}/>
      <SpecsRow e={3} title='Deteccion' desc='Sin avistamientos'/>
    </div>  
  )
}


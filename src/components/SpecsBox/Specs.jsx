import { useEffect, useState } from "react"
import { getDetections, getLastDetection } from "../../services/getDetectios"
import { SpecsRow } from "./SpecsRow"

export const Specs = () => {

  const [date, setDate] = useState('')
  const [tipo, setTipo] = useState('')

  useEffect(() => {
    getLastDetection().then( (doc) => {
      const d = new Date(doc.date.seconds)
      setDate(d.toString())
      setTipo(doc.tipo)
      console.log({date, tipo})
    })
  }, [])

  return (
    <div className="h-fit p-[40px] border-1 border-slate-300 rounded-xl">
      <h3 className="font-semibold text-xl">Informacion de la deteccion</h3>
      <SpecsRow e={1} title='Ubicacion' desc='Camara estacion X'/>
      <SpecsRow e={2} title='Fecha y Hora' desc={(date)? date : 'Cargando...'}/>
      <SpecsRow e={3} title='Deteccion' desc={(tipo)? tipo : 'Cargando...'}/>
    </div>  
  )
}


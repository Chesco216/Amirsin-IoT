import { useEffect, useState } from "react"
import { getBirdsDetection, getDetections, getRatsDetection } from "../services/getDetectios"

export const Stats = () => {

  const [numDet, setNumDet] = useState(0)
  const [rats, setRats] = useState(0)
  const [birds, setBirds] = useState(0)

  useEffect(() => {
    getDetections().then(res => setNumDet(res))
    getRatsDetection().then(res => setRats(res))
    getBirdsDetection().then(res => setBirds(res))
  }, [])
  

  return (
    <div className="p-[40px] border-1 border-slate-300 rounded-xl">
      <h3 className="font-semibold text-xl mb-[10px]">Estadisticas del Sistema</h3>
      <span className="h-fit flex flex-row justify-between mt-[30px]">
        <p>Total detecciones:</p>
        <p className="font-semibold text-lg">{numDet}</p>
      </span>
      <span className="h-fit flex flex-row justify-between mt-[30px]">
        <p>Roedores:</p>
        <p className="font-semibold text-lg">{rats}</p>
      </span>
      <span className="h-fit flex flex-row justify-between mt-[30px]">
        <p>Aves:</p>
        <p className="font-semibold text-lg">{birds}</p>
      </span>
    </div>
  )
}

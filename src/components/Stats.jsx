export const Stats = () => {
  return (
    <div className="p-[40px] border-1 border-slate-300 rounded-xl">
      <h3 className="font-semibold text-xl mb-[10px]">Estadisticas del Sistema</h3>
      <span className="h-fit flex flex-row justify-between mt-[30px]">
        <p>Total detecciones:</p>
        <p className="font-semibold text-lg">123</p>
      </span>
      <span className="h-fit flex flex-row justify-between mt-[30px]">
        <p>Roedores:</p>
        <p className="font-semibold text-lg">12</p>
      </span>
      <span className="h-fit flex flex-row justify-between mt-[30px]">
        <p>Aves:</p>
        <p className="font-semibold text-lg">31</p>
      </span>
    </div>
  )
}

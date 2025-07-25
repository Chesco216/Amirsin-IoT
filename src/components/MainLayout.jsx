export const MainLayout = ({children}) => {

  const d = new Date()

  const date = d.getDay().toString() + ' / ' + d.getMonth().toString() + ' / ' + d.getFullYear().toString()

  return (
    <div className="flex flex-col py-[20px] px-[50px]"> 
      <header className="w-full flex flex-row justify-between">
        <span className="pl-[40px] py-[20px]">
          <h1 className="font-bold text-3xl">Monitoreo Antenas</h1>
          <p>Deteccion de aves y roedores</p>
        </span>
        <span className="pr-[75px] py-[20px]">
          <p>Hora Actual</p>
          <p>{date}</p>
        </span>
      </header>
      <div className="flex flex-row gap-[30px]"> 
        {children}
      </div>
    </div>
  )
}


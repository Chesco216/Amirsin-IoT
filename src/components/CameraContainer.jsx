import { Camera } from './SVGs/Camera'

export const CameraContainer = () => {

  return (
    <div className="w-[70%] border-1 border-slate-300 p-[40px] rounded-xl">
      <span className='flex flex-row items-center pb-[10px] gap-[15px]'>
        <Camera w={40} h={40} c='black'/>
        <h3 className="text-xl font-semibold ">Transmision en vivo</h3>
        <p className='bg-red-400 text-white px-[5px] rounded-xl'>En VIVO</p>
      </span>
      <p className=" pb-[30px] text-slate-500">Camara estacion X</p>
      <div className="rounded-xl overflow-hidden ">
        <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic1099295.webp?w=1600&h=900" className="w-full"/>
      </div>
    </div>
  )
}


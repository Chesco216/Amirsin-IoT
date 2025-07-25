import { Ubi } from '../SVGs/Ubi'
import { Date } from '../SVGs/Date'
import { Warn } from '../SVGs/Warn'


export const SpecsRow = ({e, title, desc}) => {
  return (
    <div className="flex flex-row gap-[20px] items-center pt-[20px]">
      {
        e==1 ?
          <Ubi w={30} h={30} c='#27F576'/>
        : e==2 ?
          <Date w={30} h={30} c='#275EF5'/>
        : e==3 ?
        <Warn w={30} h={30} c='#F57327'/>
        : <></>
      }
      <span className='flex flex-col content-between'>
        <p className='font-semibold'>{title}</p>
        <p className='text-slate-600'>{desc}</p>
      </span>
    </div>
  )
}


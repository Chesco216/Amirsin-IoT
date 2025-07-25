import { CameraContainer } from './components/CameraContainer'
import { MainLayout } from './components/MainLayout'
import { Specs } from './components/SpecsBox/Specs'
import { Stats } from './components/Stats'

function App() {

  return (
    <MainLayout>
      <CameraContainer/>
      <div className='flex flex-col gap-[30px]'>
        <Specs/>
        <Stats/>
      </div>
    </MainLayout>
  )
}

export default App

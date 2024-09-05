import { Outlet } from 'react-router-dom'
import Logo from '@/components/Logo'
import NavMenu from '@/components/NavMenu'

export default function Layout() {
  return (
   
    <>
    <header className='bg-blue-300 py-4'>
        <div className=' max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <div className='w-24'>
          
            <Logo />
        </div>
        <NavMenu />  
        </div>
         
            
      
    </header>
    <section className='max-w-screen-2xl mx-auto mt-10 p-5'>
    <Outlet />
    </section>
    <footer className='py-5'>
        <p className='text-center'>
            Unidad Administrativa Especial de Salud de Arauca - Programa de Zoonosis {new Date().getFullYear()}
        </p>

    </footer>
     
    </>
  )
}

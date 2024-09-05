import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeViews from './views/HomeViews'
import Layout from './layouts/Layout'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<Layout />}>
     <Route path='/' element={<HomeViews />} index />
        
           
    </Route>   
    </Routes>
    </BrowserRouter>   
  )
}

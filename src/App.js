import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegacion from './componentes/navegacion'
import Productos from './componentes/productos'
import CrearProductos from './componentes/crearProducto'


function App() {
  return (  
    
    <BrowserRouter>
     <Navegacion/>
     <div className="container p-4">
      <Routes>

          <Route path="/" element={<Productos />}></Route>
          <Route path="/editar/:id" element={<CrearProductos />}></Route>
          <Route path="/crear" element={<CrearProductos />}></Route>
       
      </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;

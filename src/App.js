
import './App.css';
import Testimonio from './components/Testimonio.jsx';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 > Nuestros trabajadores: </h1>
        <Testimonio
        
        nombre='Mario'
        trabajo='Ingeniero'
        empresa='Amazon'
        testimonio='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam exercitationem possimus officiis. Doloremque ipsum perferendis corrupti, possimus atque esse aspernatur magnam nulla laboriosam, optio laudantium accusantium dolorum deleniti voluptatibus aut!'
        imagen='cara'   
        
        />
        <Testimonio
        
        nombre='Diego'
        trabajo='Analista'
        empresa='Mercados sur'
        testimonio='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam exercitationem possimus officiis. Doloremque ipsum perferendis corrupti, possimus atque esse aspernatur magnam nulla laboriosam, optio laudantium accusantium dolorum deleniti voluptatibus aut!'
        imagen='cara-dos'   
        
        />
        <Testimonio
        
        nombre='Manuel'
        trabajo='Programador'
        empresa='Advance'
        testimonio='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam exercitationem possimus officiis. Doloremque ipsum perferendis corrupti, possimus atque esse aspernatur magnam nulla laboriosam, optio laudantium accusantium dolorum deleniti voluptatibus aut!'
        imagen='cara-tres'   
        
        />
      </div>
    </div>
  );

}

export default App;

import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <main>
      <NavBar/>;
      <ItemListContainer/>
      <ItemListContainer texto="Este es un texto simple de prueba"/>
    </main>
  );
}


export default App;

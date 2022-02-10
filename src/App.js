import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCounter'

function App() {
  return (
    <main>
      <NavBar/>;
      <ItemListContainer texto="Item de prueba"/>
      <ItemCount stock="10" initial="1"/>
    </main>
  );
}


export default App;

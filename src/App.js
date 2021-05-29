import BientotDispo from './BientotDispo';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="eshop">
      <Route exact path="/Accueil">
        <BientotDispo />
      </Route>
      <Route exact path="/tableau">
        Tableau de Bord
      </Route>

    </div>
  );
}

export default App;

import BientotDispo from './BientotDispo';
import TableauBord from './TableauBord';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="eshop">
      <Route exact path="/Accueil">
        <BientotDispo />
      </Route>
      <Route exact path="/tableau">
        <TableauBord />
      </Route>

    </div>
  );
}

export default App;

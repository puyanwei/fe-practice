import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TipCalculatorPage from "./pages/TipCalculatorPage";
import FurnitureShop from 'pages/FurnitureShop';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tip-calculator" component={TipCalculatorPage} />
        <Route path="/furniture-shop" component={FurnitureShop} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;

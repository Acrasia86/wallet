import style from "./style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCard from './pages/AddCard'
import { useSelector } from "react-redux";


function App() {
 
  
  const { cards } = useSelector((state) => state.cardsData);
  return (
   
      <header className="App-header">
         <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            {cards.map((card, i) => (
              <Route
                path="/addcard"
                key={i}
                render={() => <AddCard card={card} />}
              />
            ))}
   
          </Switch>
        </Router>
        </div>
      </header>
   
  );
}

export default App;

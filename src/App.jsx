import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CharactersPage from "./pages/CharactersPage/CharactersPage";
import CharacterDetail from "./pages/CharactersPage/components/CharacterDetail/CharacterDetail";
import HousesPage from "./pages/HousesPage/HousesPage";
import HouseDetail from "./pages/HousesPage/components/HouseDetail/HouseDetail";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App p-0">
        <main className="App-body">
          <Switch>
            <Route path="/characters/:name">
              <CharacterDetail />
            </Route>
            <Route path="/houses/:name">
              <HouseDetail />
            </Route>
            <Route path="/characters">
              <CharactersPage />
            </Route>
            <Route path="/houses">
              <HousesPage />
            </Route>
            <Route path="/chronology">
              <ChronologyPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

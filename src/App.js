import "./App.css";
import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container className="container-shadow">
      <Grid container className="grid-container">
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route>
                <Resume path="/" />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

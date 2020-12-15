import Header from "./common/Header";
import Footer from "./common/Footer";
import HomePage from "./home/HomePage";
import NewsPage from "./news/NewsPage";
import AboutPage from "./about/AboutPage";
import DancesPage from "./dances/DancesPage";
import ContactPage from "./contact/ContactPage";
import { Route, Switch } from "react-router-dom";
import "../custom.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/news" component={NewsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/dances" component={DancesPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog'
import Vlog from './pages/vlog/Vlog'
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/video" component={Vlog} />
        </Switch>

        <Subscribe></Subscribe>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail/Detail';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import AboutUs from './Home/AboutUs/AboutUs';
import Doctors from './Home/Doctors/Doctors';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import Services from './Home/Services/Services';
function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
       <Switch>
           <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
       </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

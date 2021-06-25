import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory();

  const handleRedirects = ()=>  {
    history.push('');
  }

  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route exact path="/">
         <Login />
       </Route>
     </Switch>
     

      <div className="container">
         <Switch>
           <Route path="/home">
              <Navbar />
              <Home />
              <Footer />
           </Route>
         </Switch>
         
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;

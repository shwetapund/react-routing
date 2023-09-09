import ReactDOM from 'react-dom/client';
import { Home } from './views/Home/Home';
import { About } from './views/About/About';
import { Contact } from './views/Contact/Contact';
import Button from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';

    function App() {
      const path = window.location.pathname;

    switch (path) {

    case "/":
    return <Home />;

    case "/about":
    return <About />;


    case "/contact":
    return <Contact />;

    default:
    return <h1>Page not found</h1>
    
 }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
 
     {" "}
    <App />{" "} 
  </>
);



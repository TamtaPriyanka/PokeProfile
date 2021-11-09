import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';


function App () {
 
      return ( 
         <div> 
            <NavBar/>
            <div className="App">
              <div className="container">
                <DashBoard/>

              </div>
            </div>
          </div>
        )
    
  
      }

  
export default App;

 



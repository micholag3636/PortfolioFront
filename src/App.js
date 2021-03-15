import Main from "./Main.js"
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Nav from "./Nav.js"
import Portfolio from "./Portfolio.js"
import About from "./About.js"
import Contact from "./Contact.js"
import SideDrawer from "./SideDrawer.js"
import Backdrop from "./Backdrop.js"
import {useState} from "react"


function App() {


  const [sideToggle, setSideToggle] = useState(false)
  return (
    <div className="App">

      
      <Router>
      <Route exact path="/">
        
       
                        
                      
                      
  
  
  
  
  
  
  
  
  
          <Main />
  
  
          </Route>

  
  
  
  
  


     
     
   

    
       
  


   
  
      

      <Switch>

                
   


    





      <Route exact path="/projects">

            
   


     
      <div id="logo">
                        <img src="https://i.postimg.cc/hvgWj4y7/download-1-removebg-preview-1.png" />
                        </div>



                        
                        <Nav click={() => setSideToggle(true)}/>
                        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}  />
          
          
        
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />


               
                 
      
     





<Portfolio />
</Route>


<Route exact path="/about">



<div id="logo">
                        <img src="https://i.postimg.cc/hvgWj4y7/download-1-removebg-preview-1.png" />
                        </div>


               
                 
 
                        <Nav click={() => setSideToggle(true)}/>
                        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}  />
          
          
        
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

<About />
</Route>


<Route exact path="/contact">



                    <div id="logo">
                        <img src="https://i.postimg.cc/hvgWj4y7/download-1-removebg-preview-1.png" />
                        </div>


               
                 




     
                        <Nav click={() => setSideToggle(true)}/>
                        <SideDrawer show={sideToggle} click={() => setSideToggle(false)}  />
          
          
        
          <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

<Contact />
</Route>


      

      </Switch>

      








   
      </Router>
     
      
    </div>
  );
}

export default App;

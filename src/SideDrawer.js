import React from 'react'
import {Link} from "react-router-dom"
import "./SideDrawer.css"

function SideDrawer({show,click}) {

    const sideDrawerClass = ["sidedrawer"];
  







    if(show){
        sideDrawerClass.push("show")

    }




    return (
        <div>
      
              <div className={sideDrawerClass.join(" ")}>
            <div className="sidedrawer_links" onClick={click}>




                

                
                  

<Link to="/">


<button id="homebut" className="navbut">   <h3 className="droph3" id="addressh3">Home</h3>    </button>
</Link>

<Link to="/portfolio">


<button id="homebut" className="navbut">   <h3 className="droph3" id="addressh3">Potfolio</h3>    </button>
</Link>

<Link to="/about">


<button id="homebut" className="navbut">   <h3 className="droph3" id="addressh3">About</h3>    </button>
</Link>

<Link to="/contact">


<button id="homebut" className="navbut">   <h3 className="droph3" id="addressh3">Contact</h3>    </button>
</Link>







                    
        

                    
                   









</div>
</div>
        </div>
    )
}

export default SideDrawer

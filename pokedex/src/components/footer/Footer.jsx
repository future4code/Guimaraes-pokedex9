import React from "react";
import "./footer.css"




export default ()=>{
    return(
        <div className="container">
            <span> <img src="https://o.remove.bg/downloads/5046d4b1-d82b-4cb0-a3c4-b01430b2aab6/pokeapi_256-removebg-preview.png"/></span>
            <div>
                <a href="https://www.youtube.com/" ><img className="socials" src="https://cdn-icons-png.flaticon.com/128/49/49084.png" alt="youtube"/></a>
               <a href="https://pt-br.facebook.com/login/device-based/regular/login/">  <img className="socials" src="https://cdn-icons-png.flaticon.com/128/725/725350.png" alt="facebook"/></a>
               <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"> <img className="socials" src="https://cdn-icons-png.flaticon.com/128/160/160194.png" alt="twitter"/></a>
               <a href="https://www.instagram.com/accounts/login/"> <img className="socials" src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="instagram"/></a>
            </div>
        </div>
    )
}
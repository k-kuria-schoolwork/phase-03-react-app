// import { NavLink } from "react-router-dom";

function NavBar (){
    return(
        <div className="nav">
            <h1>MasQani heights</h1>
            <ul>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contacts">Contacts</a>
            <a href="/pricing">Pricing</a>
            </ul>
        </div>
    )
}

export default NavBar;
// import { NavLink } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

function NavBar (){
    return(
        <fragment>
        {/* className="flex-column"  */}
        <Nav>
          <ul>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          </ul>
          </Nav>
     
      </fragment>
    )
}

export default NavBar;
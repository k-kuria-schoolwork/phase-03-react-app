function NavBar (){
    retrurn(
        <div>
            <h2 className="header1">MASQANI AGENCY</h2>
            <ul>
            <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/services"><li>Services</li></NavLink>
                <NavLink to="/pricing"><li>Pricing</li></NavLink>
                <NavLink to="/contacts"><li>Contacts</li></NavLink>
            </ul>
        </div>
    )
}
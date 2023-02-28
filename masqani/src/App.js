import React from "react";
import './App.css';
 

function App() {
  return (
    <div>
      <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}>Home</Route>
        <Route  exact path="/about" element={<About />}>About</Route>
        <Route exact path="/services" element={<Services />}>Services</Route>
        <Route exact path="/pricing" element={<Pricing />}>pricing</Route>
        <Route exact path="/contacts" element={<Contacts />}>Contacts</Route>
      </Routes>
    </div>
    </div>
  )
}

export default App;
n

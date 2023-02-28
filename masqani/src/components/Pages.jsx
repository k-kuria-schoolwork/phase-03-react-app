import React from "react"
import Header from "../header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"

const Pages = () => {
  return (
    <>
    <Router>
        <Header>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Header>
    </Router>
    </>

  )
}

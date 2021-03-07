import React, { useMemo } from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import Create from "./Pages/Create";
import Home from "./Pages/Home";

import { DataContext, useData } from "./functions/provider";

/*
/ - home Home.jsx
/create - create business screen Create.jsx
/update - update business screen Update.jsx
*/

function App() {
  const { data, filters, setFilters, business, setBusiness } = useData();
  const dataProvider = useMemo(
    () => ({ data, filters, setFilters, business, setBusiness }),
    [data, filters, setFilters, business, setBusiness]
  );

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Router>
        <header>
          <Navbar fixed="top" bg="primary" variant="dark">
          <Link to="/"><Navbar.Brand>
              Is It Open
            </Navbar.Brand></Link>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <div style={vrule}></div>
            <Nav className="mr-auto">
              <Nav.Link href="/modify">
                {business.name !== "" ? "Update" : "Create"} Your Business
              </Nav.Link>
            </Nav>
            <text style={text}>Hoboken, NJ</text>
          </Navbar>
        </header>
        <DataContext.Provider value={dataProvider}>
          <Switch>
            <Route path="/modify">
              <Create />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </DataContext.Provider>
      </Router>
    </div>
  );
}

const vrule = {
  border: "1px solid white",
  height: "30px",
  marginLeft: 15,
  marginRight: 5,
};
const text = {
  color: "white",
  fontSize: 20,
};

export default App;

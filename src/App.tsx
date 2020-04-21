import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Animals from "pages/Animals";
import Home from "pages/Home";
import BreadcrumbOutlet from "components/breadcrumb/BreadcrumbOutlet";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

function App() {
  return (
    <div>
      <header>
        <h1>Breadcrumbs with React Portals</h1>
        <BreadcrumbOutlet />
        <Breadcrumb>Home</Breadcrumb>
        <hr />
      </header>

      <Switch>
        <Route path="/animals" component={Animals} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

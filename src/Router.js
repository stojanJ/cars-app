import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AppAddCar from "./pages/AppAddCar";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/cars">
        <AppCars />
      </Route>
      <Route exact path="/add">
        <AppAddCar />
      </Route>
    </Switch>
  );
}
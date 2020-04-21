import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Animal from "./Animal";
import AnimalService from "services/Animal.service";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

export default () => {
  const match = useRouteMatch();
  return (
    <section>
      <Breadcrumb>Animals</Breadcrumb>
      <Switch>
        <Route exact path={match.url}>
          <h2>Our animals</h2>
          <ul>
            {AnimalService.getAnimals().map(({ id, name }) => (
              <li key={id}>
                <Link to={`/animals/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </Route>
        <Route exact path={`${match.url}/:animalId`} component={Animal} />
      </Switch>
    </section>
  );
};

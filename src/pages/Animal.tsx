import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import AnimalService from "services/Animal.service";
import Breadcrumb from "components/breadcrumb/Breadcrumb";

export default () => {
  const { params } = useRouteMatch<{ animalId: string }>();

  const animal = AnimalService.getAnimalById(params.animalId);

  if (!animal)
    return (
      <p>
        Bad animal. <Link to="/animals">Return to animals</Link>
      </p>
    );

  const { name, scientific_name } = animal;

  return (
    <section>
      <Breadcrumb>{name}</Breadcrumb>
      <div>
        <b>Name: </b>
        {name}
      </div>
      <div>
        <b>Scientific Name: </b>
        {scientific_name}
      </div>
    </section>
  );
};

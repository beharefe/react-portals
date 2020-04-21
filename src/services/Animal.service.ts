import data from "./data";

export type Animal = typeof data[0];

class AnimalService {
  public getAnimals(): Animal[] {
    return data;
  }

  public getAnimalById(animalId: string | number): Animal {
    return data.filter(({ id }) => id === Number(animalId))[0];
  }
}

export default new AnimalService();

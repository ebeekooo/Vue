interface people {
  name: string;
  age: number;
  sign: string;
  dir?: string;
}

export const person: people = {
  name: "Beli",
  age: 22,
  sign: "aries",
};
const { age, name, dir = "Sin dirección" } = person;
console.log(age, name, dir);

console.log({
  name: person.name,
  age: person.age,
});

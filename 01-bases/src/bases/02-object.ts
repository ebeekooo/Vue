const person = {
  lastName: "Camargo",
  age: 19,
  address: {
    city: "New york",
    country: "Canada",
  },
}; //as const;

const person2 = { ...person };
person2.lastName = "Coronel";
console.log({ person });
console.log({ person2 });

function greetPerson(name: string) {
  return `Hola ${name}`;
}
console.log(greetPerson("Fernando"));

const persona = (name: string) => {
  return `Hola ${name}`;
};
console.log(persona("Alex"));

const nombre = (name: string) => `Hola ${name}`;
console.log(nombre("Edi"));

const getUser = () => ({
  uid: "ABC-123",
  username: "awaiqow123",
});
console.log(getUser());

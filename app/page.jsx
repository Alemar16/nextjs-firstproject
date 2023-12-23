import Users from "../components/Users";
async function fetchUsers() {
  //funcion
  const res = await fetch("https://reqres.in/api/users"); //pedir datos
  const data = await res.json(); //transformar datos
  return data.data; //devolver datos como arreglo de usuarios
}

async function IndexPage() {
  const users = await fetchUsers(); //ejecutar la funcion
  return <Users users={users} />;
}

export default IndexPage;

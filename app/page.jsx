
async function fetchUsers() {//funcion
 const res = await fetch('https://reqres.in/api/users')//pedir datos
   const data = await res.json()//transformar datos
   return data.data//devolver datos como arreglo de usuarios
}

async function IndexPage() {
  const users = await fetchUsers()//ejecutar la funcion
  return (
    <div>
        <h1>Index page</h1>
        <div>
         {
          users.map((user) => (
            <li key={user.id}>
              <div>
                <h5>{user.id} - {user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>
              </div>
              <img src={user.avatar} alt={user.first_name} />
            </li>
          ))
         }
        </div>
    </div>
  )
}

export default IndexPage
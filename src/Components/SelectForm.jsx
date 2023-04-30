import { useEffect, useState } from "react"

export const SelectForm = (name) => {
    console.log("datos desde el suelect", name)
    const [usersArray, setusersArray] = useState([])
    const viewUsers = () =>{
        setusersArray([name, ...usersArray])
    }
    useEffect(() => {
        
        viewUsers()
      return () => {
      }
    }, [name])
    
    
    console.log(usersArray)
  return (
    <>
        <h1>Visualizacion de los daos</h1>
        {
            (usersArray.map((user) => {
                {console.log("este es el console del map",user)}
                <h1>hola</h1>
            }))
        }
        
    </>
  )
}

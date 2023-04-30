import { useState } from "react"
import { SelectForm } from "./SelectForm";

export const Form = () => {
    const [user, setusuario] = useState({
        name: "",
        secondname: "",
        experience: "",
        description: ""
    })
    const changeData = (e) => {
        const {name, value} = e.target;
        setusuario({
                ...user,
                [name] : value
        })
    }
    
    const getData = (e) => {
        e.preventDefault()

    }

  return (
    <>
        <h1>Formulario</h1>
        <form onSubmit={getData}>
            
            <input type="text" placeholder="name" name="name" onChange={changeData}/>
            <input type="text" placeholder="secondname" name="secondname" onChange={changeData}/>
            <select name="experience" onChange={changeData}>
                <option value="si">SI</option>
                <option value="no">NO</option>
            </select>
            <textarea name="description" onChange={changeData}></textarea>
            <input type="submit" value="enviar" />
        </form>

        <SelectForm users = {user.name}  />

    </>
  )
}

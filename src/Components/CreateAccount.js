import React from "react"
import { createUser } from "../API/api"

const CreateAccount = ({ changeUserName, changeUserBirthday }) => {
  const newUserCreate = async (event) => {
    event.preventDefault()
    let { name, birthday } = event.target.elements

    const newUser = await createUser(name.value, birthday.value)
    changeUserName(newUser.name)
    changeUserBirthday(newUser.birthday)
  }

  return (
    <div>
      <span>Join the game!</span>
      <form onSubmit={newUserCreate}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="birthday"> Birth Year</label>
        <input type="text" name="birthday" />
        <button>Join</button>
      </form>
    </div>
  )
}

export default CreateAccount

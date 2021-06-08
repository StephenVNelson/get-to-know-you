import React, { useState, useEffect } from "react"
import CreateAccount from "./CreateAccount"
import Game from "./Game"
const Main = () => {
  const [userName, changeUserName] = useState(localStorage.getItem("userName"))
  const [userBirthday, changeUserBirthday] = useState(localStorage.getItem("userBirthday"))

  useEffect(() => {
    if (!userName && !userBirthday) {
      console.log("No user credentials!")
    }
  }, [])

  const currentComponenet = userName ? (
    <Game />
  ) : (
    <CreateAccount changeUserName={changeUserName} changeUserBirthday={changeUserBirthday} />
  )
  return <div>{currentComponenet}</div>
}

export default Main

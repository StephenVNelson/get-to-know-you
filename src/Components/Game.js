import React, { useState, useEffect } from "react"
import { connectToCable } from "../API/actionCable"

const Game = () => {
  useEffect(() => {
    connectToCable()
  }, [])

  return <div>Play games</div>
}

export default Game

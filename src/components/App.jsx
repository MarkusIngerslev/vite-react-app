// import React from "react"
import Header from "./Header.jsx"
import Greeting from "./Greeting.jsx"
import TimeOfDay from "./TimeOfDay.jsx"
import Button from "./Button.jsx"

export default function App() {
    return (
      <div>
        <Header name="Hans" userName="Hansimani" email="hans@hans.dk" age="35" />
        <Greeting />
        <TimeOfDay />
        <Button />
      </div>
    )
  }

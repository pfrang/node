import { useState } from "react";
import { Login } from "./components/Login";
import { Lobby } from "./components/Lobby";


export default function Home() {
  const [username, setUsername] = useState(undefined);

  if (!username) {
    return <Login onSubmit={setUsername} />
  }

  return (
    <Lobby username={username} />
  )
}

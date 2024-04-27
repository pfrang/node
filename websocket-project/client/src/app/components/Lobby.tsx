import { useEffect, useRef } from "react"
import useWebSocket from "react-use-websocket"
import throttle from 'lodash.throttle'
import { Cursor } from "./Cursor"

type Users = {
  [key: string]: {
    username: string;
    state: {
      x: number,
      y: number
    }
  }
}
const renderCursors = (users: Users) => {
  return Object.keys(users).map(uuid => {
    const user = users[uuid];

    return(
      <Cursor key={uuid} point={
        [user.state.x, user.state.y]
      }/>
    )
  })
}

const renderUsersList = (users: Users) => {
    return (
      <ul>
        {Object.keys(users).map(uuid => {
          return <li key={uuid}>{JSON.stringify(users[uuid])}</li>
        })}
      </ul>
    )
}

export const Lobby = ({username}) => {

  const WS_URL = "ws://localhost:8000"
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    queryParams: {username}
  })

  const INTERVAL = 50;
   // useRef to prevent re running this for ebery render
  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, INTERVAL));

  useEffect(() => {
    sendJsonMessage({
      x: 0,
      y: 0
    })
    window.addEventListener("mousemove", e => {
      sendJsonMessageThrottled.current({x: e.clientX, y: e.clientY})
    })
  },[])

  if(lastJsonMessage) {
    return (
      <>
      {renderCursors(lastJsonMessage as Users)}
      {renderUsersList(lastJsonMessage as Users)}
      </>
    )
  }

  return (
    <h1>Hello {`${username}`}</h1>
  )
}

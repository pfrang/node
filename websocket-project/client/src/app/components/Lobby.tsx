import { useEffect, useRef } from "react"
import useWebSocket from "react-use-websocket"
import throttle from 'lodash.throttle'

export const Lobby = ({username}) => {

  const WS_URL = "ws://localhost:8000"
  const { sendJsonMessage } = useWebSocket(WS_URL, {
    queryParams: {username}
  })

  const INTERVAL = 50;
   // useRef to prevent re running this for ebery render
  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, INTERVAL));

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      sendJsonMessageThrottled.current({x: e.clientX, y: e.clientY})
    })
  },[])

  return (
    <h1>Hello {`${username}`}</h1>
  )
}

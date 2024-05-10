"use client"
import { useEffect, useMemo, useRef } from "react"
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

    return (
      <Cursor key={uuid} point={
        [user.state.x, user.state.y]
      } />
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

export const Lobby = ({ username }) => {
  const isBrowser = typeof window !== "undefined";

  const WS_URL = process.env.NEXT_PUBLIC_WS_URL;

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL, {
    queryParams: { username },
    reconnectAttempts: 0,
  })

  const INTERVAL = 50;
  // useRef to prevent re running this for ebery render
  const sendJsonMessageThrottled = useRef(throttle((message) => {
    if (readyState === WebSocket.OPEN) {
      sendJsonMessage(message);
    } else {
      console.log(`Cannot send message, WebSocket is not open: ${readyState}`);
    }
  }, INTERVAL));


  useEffect(() => {
    if (readyState === WebSocket.OPEN) {
      sendJsonMessage({
        x: 0,
        y: 0
      });
    }

    const handleMouseMove = e => {
      if (readyState === WebSocket.OPEN) {
        sendJsonMessageThrottled.current({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [readyState]); // Add readyState as a dependency

  if (lastJsonMessage) {
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

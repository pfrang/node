"use client"

import { useState } from "react";

export const Login = ({onSubmit}: {onSubmit: any}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username  } = e.currentTarget;
    const uName = username.value;
    onSubmit(uName);
  }
  return (
    <>
    <h1 className="text-2xl">Welcome to login</h1>
    <p>What should people call you</p>
    <form onSubmit={handleSubmit}>
      <div className="flex w-fit border-2 border-gray-400">
      <input className="pl-2" type="text" name="username" placeholder="Username"  />
      <button className="bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
    </form>
    </>
  )
}

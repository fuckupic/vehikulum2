import React, { useRef } from 'react'

const Form = ({ handleKnowPassword, creds }) => {
  const password = useRef()
  const login = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    handleKnowPassword(login.current.value, password.current.value)
    console.log(login.current.value)
    console.log(password.current.value)
    console.log(handleKnowPassword)
    // event.currentTarget.reset()
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col">
      <h1 className="font-bold">Přihlášení do systému</h1>
      <div className="gap-4 flex flex-col text-white">
        <input
          className="input bg-black"
          type="text"
          ref={login}
          placeholder="Přihlašovací jméno"
        />
        <input
          className="input bg-black"
          type="password"
          ref={password}
          placeholder="Heslo"
        />
        <input className="btn btn-primary" type="submit" value="Přihlásit se" />
      </div>
    </form>
  )
}

export default Form

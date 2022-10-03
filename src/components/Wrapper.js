import React, { useState, useRef } from 'react'
import Header from './Header'
import Body from './Body'
import Map from './Map'

const Wrapper = ({ creds }) => {
  const [knowPassword, setKnowPassword] = useState(false)
  const [yourName, setYourName] = useState('')

  const handleKnowPassword = (log, pass) => {
    const you = creds.filter((person) => person.login === log)
    console.log(you.map((val) => val.name).toString())
    if (
      creds.map((cred) => cred.password).includes(pass) &&
      creds.map((cred) => cred.login).includes(log)
    ) {
      setKnowPassword(!knowPassword)
      setYourName(() => ({
        yourName: you.map((val) => val.name).toString(),
      }))
      console.log(yourName)
    } else {
      // console.log('Něco je blbě!')
    }
  }

  if (knowPassword) {
    return (
      <div className="w-[100vw]">
        <Header />
        <Map yourName={yourName} />
      </div>
    )
  } else {
    return (
      <div className="w-[100vw]">
        <Header />
        <Body handleKnowPassword={handleKnowPassword} creds={creds} />
      </div>
    )
  }
}

export default Wrapper

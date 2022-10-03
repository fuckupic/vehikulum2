import React, { useRef, useState } from 'react'
import '../App.css'
import Header from './Header'
import Wrapper from './Wrapper'

function App() {
  const password = '1234'
  const [creds, setCreds] = useState([
    {
      login: 'IH214',
      name: 'Pavlína Hanžlíková',
      password,
      id: 1,
    },
    {
      login: 'IH1206',
      name: 'Marek Doležal',
      password,
      id: 2,
    },
    {
      login: 'IH973',
      name: 'Gunther Wolf',
      password,
      id: 3,
    },
    {
      login: 'IS103',
      name: 'Jan Střelka',
      password,
      id: 4,
    },
    {
      login: 'IH170',
      name: 'Karel Stonal',
      password,
      id: 5,
    },
    {
      login: 'IH716',
      name: 'Šimek Grossman',
      password,
      id: 6,
    },
    {
      login: 'IH174',
      name: 'Filip Opletka',
      password,
      id: 7,
    },
    {
      login: 'IH173',
      name: 'Klára Opletková',
      password,
      id: 8,
    },
  ])
  return <Wrapper creds={creds} />
}

export default App

import React from 'react'
import Form from './Form'

const Body = ({ handleKnowPassword, creds }) => {
  return (
    <div className=" bg-white pt-14 flex items-center justify-center font-courier text-black">
      <div className=" max-w-screen-xl gap-12 justify-between flex flex-row flex-1">
        <div className=" max-w-[33%] flex flex-col gap-2 ">
          <h2 className="font-bold">Naše nabídka:</h2>
          <p>Důlní vozíky</p>
          <p>Koleje</p>
          <p>Super Krumpáče</p>
          <img className="" src="vozikPlaceholder.jpeg" alt="" />
          <div className="contant">
            <h2 className="font-bold">Kontakt</h2>
            <p>
              <a
                className="underline"
                href="mailto:obchodnioddeleniplzenemail@vehikulum.cz"
              >
                obchodnioddeleniplzenemail@vehikulum.cz
              </a>
            </p>
          </div>
        </div>
        <div>
          <Form handleKnowPassword={handleKnowPassword} creds={creds} />
        </div>
        <div className="disclaimer font-bold">
          <h2>
            Naše výroba je automatizovaná.
            <br />
            Fungujeme ekologicky. :-)
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Body

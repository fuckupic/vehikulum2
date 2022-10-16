import React from 'react'

const Map = ({ yourName, something }) => {
  let newDate = new Date()
  let date = newDate.getDate()
  let month = newDate.getMonth()
  let year = newDate.getFullYear() + 100
  let time = newDate.getHours()
  let minutes = newDate.getMinutes()

  return (
    <div className=" bg-white pt-14 flex items-center justify-center font-courier text-black">
      <div className=" max-w-screen-xl gap-14 justify-between flex flex-col flex-1 items-center">
        <div className="text-center flex flex-col gap-4">
          <h3 className=" font-courier font-bold text-xl uppercase">
            Profil hlídače: {yourName.yourName}
          </h3>
          <h3 className="font-bold">
            Datum a čas příští služby:
            {` ${time}:${minutes} / ${date}. ${month}. / ${year}`}
          </h3>
          <h3 className="font-bold">Prázdné cely: 354, 355, 281, 388</h3>
        </div>
        <div className=" w-11/12 h-full">
          <h3 className="font-bold">Floorplan sektoru 29:</h3>
          <img src={'FloorplanVehikulum.svg'} alt="" />{' '}
        </div>
      </div>
    </div>
  )
}

export default Map

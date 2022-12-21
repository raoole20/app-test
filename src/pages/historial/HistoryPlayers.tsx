import React from 'react'

const HistoryPlayers = ({ list_player }: any) => {
  return (
    <div className='contenedor-list-player'>
      <ul className='list-players'>
        {
            list_player.map( (item: any, index: number) => (
                <li className='list-item'>
                    <span>{(index + 1)}.</span>
                    <span>{item.name}</span>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default HistoryPlayers

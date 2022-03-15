import React from 'react'
import Commande from '../ag table/Commande/Commande'
import Client from '../ag table/Client/Client'
import Dechets from '../ag table/Dechet/Dechets'

export default function GestionDechet() {
  return (
    <div>
          <h1 align="center"  className='color'>gestion des déchets</h1>
                <Dechets/>
                <Client/>
                <Commande/>
    </div>
  )
}

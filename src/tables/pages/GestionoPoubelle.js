import React from 'react'

import ZoneTravail from '../ag table/ZoneTravail/ZoneTravail'
import Etablissement from '../ag table/Etablissement/Etablissement'
import BlocPoubelle from '../ag table/BlocPoubelle/BlocPoubelle'
import Poubelle from '../ag table/Poubelle/Poubelle'

export default function GestionPoubelle() {
  return (
    <div>  
    <h1 align="center"  className='color'>gestion des poubelle</h1>
        <ZoneTravail/>
        <Etablissement/>
        <BlocPoubelle/>
        <Poubelle/>
    </div>
  )
}

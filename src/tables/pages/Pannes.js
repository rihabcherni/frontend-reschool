import React from 'react'

import ReparateurPoubelle from '../ag table/ReparateurPoubelle/ReparateurPoubelle'
import Mecanicien from '../ag table/Mecanicien/Mecanicien'
import ReparationPoubelle from '../ag table/ReparationPoubelle/ReparationPoubelle'
import ReparationCamion from '../ag table/ReparationCamion/ReparationCamion'
			
export default function Pannes() {
  return (
    <div>
    <h1 align="center"  className='color'>gestion des pannes</h1>
            <ReparateurPoubelle/>
            <ReparationPoubelle/>
            <Mecanicien/>
            <ReparationCamion/>
    </div>
  )
}

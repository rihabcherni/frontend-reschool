import React from 'react'
import Camions from '../ag table/Camion/Camions'
import Ouvrier from '../ag table/Ouvrier/Ouvrier'
import ZoneDepots from '../ag table/ZoneDepot/ZoneDepots'
import Depot from '../ag table/Depot/Depot'
export default function PageTransportDechet() {
  return (
    <div>
        <h1 align="center" className='color'>transport de déchets</h1>
              <ZoneDepots/>
              <Depot/>
              <Ouvrier/>
              <Camions/>
    </div>
  )
}

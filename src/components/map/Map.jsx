import React, { useCallback, useRef } from 'react'
import propTypes from 'prop-types'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

import formatMoney from '../../helpers/formatter'

const style = {
    width: '100%',
    height: '100vh'
}

export const Map = ({ coordsData }) => {
    const mapRef = useRef(null)
    // create map
    const createMap = useCallback(() => {
        const map = L.map(mapRef.current).setView([43.238949, 76.889709], 12)
        const defaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        })
        const markersGroup = L.markerClusterGroup({ chunkedLoading: true })
        const markers = coordsData.map(({ coords, oredrInfo }) =>
            L.marker([coords.lat, coords.long], { icon: defaultIcon }).bindPopup(
                `${oredrInfo.id}.<br>${oredrInfo.clinetName}.<br>${formatMoney(oredrInfo.price)}.`
            )
        )

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
        markersGroup.addLayers(markers)
        map.addLayer(markersGroup)
    }, [coordsData])

    window.addEventListener('load', createMap)

    return <div ref={mapRef} style={style} />
}

Map.propTypes = {
    coordsData: propTypes.array
}

Map.defaultProps = {
    coordsData: []
}

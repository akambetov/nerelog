import React, { useCallback, useRef } from 'react'
import propTypes from 'prop-types'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const style = {
    width: '100%',
    height: '100vh'
}

export const Map = ({ coordsData }) => {
    const mapRef = useRef(null)
    coordsData.length = 10

    // create map
    const createMap = useCallback(() => {
        const map = L.map(mapRef.current).setView([43.238949, 76.889709], 13)
        const defaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        const markers = coordsData.map(({ coords, oredrInfo }) =>
            L.marker([coords.lat, coords.long], { icon: defaultIcon })
                .addTo(map)
                .bindPopup(`${oredrInfo.id}.<br>${oredrInfo.clinetName}.`)
        )

        L.layerGroup(markers).addTo(map)
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

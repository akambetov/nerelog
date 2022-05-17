import React, { useCallback, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const style = {
    width: '100%',
    height: '100vh'
}

export const Map = () => {
    const mapRef = useRef(null)
    // create map
    const createMap = useCallback(() => {
        const map = L.map(mapRef.current).setView([51.505, -0.09], 13)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)

        L.marker([51.5, -0.09])
            .addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup()
    }, [])

    window.addEventListener('load', createMap)

    return <div ref={mapRef} style={style} />
}

export default Map
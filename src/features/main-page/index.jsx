import React, { useState, useMemo, useEffect } from 'react'

import ScreenLayout from '../../components/screen-layout'
import { Flex } from '../../components/flex'
import { List } from '../../components/list'
import { Map } from '../../components/map/Map'

import appsData from '../../mock-data/NeRelog_apps.json'
import clientsData from '../../mock-data/NeRelog_clients.json'

export default () => {
    const [apps] = useState(appsData)
    const [clients] = useState(clientsData)
    const [flexDirection, setFlexDirection] = useState(window.innerWidth < 990 ? 'column' : 'row')

    const mappedData = useMemo(
        () =>
            apps.map((app) => {
                const clientItem = clients.find((client) => client.id === app.client_id)

                return { appData: app, clientData: clientItem }
            }),
        [apps, clients]
    )

    const coordsData = useMemo(
        () =>
            mappedData.map((data) => ({
                coords: data.appData.coords,
                oredrInfo: {
                    id: data.appData.id,
                    price: data.appData.price,
                    clinetName: data.clientData.name
                }
            })),
        [mappedData]
    )

    const onResize = () => setFlexDirection(window.innerWidth < 990 ? 'column' : 'row')

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <ScreenLayout>
            <ScreenLayout.Header title="Header" />
            <ScreenLayout.Content>
                <Flex direction={flexDirection}>
                    <List list={mappedData} />
                    <Map coordsData={coordsData} />
                </Flex>
            </ScreenLayout.Content>
            <ScreenLayout.Footer>
                <h1>Footer</h1>
            </ScreenLayout.Footer>
        </ScreenLayout>
    )
}

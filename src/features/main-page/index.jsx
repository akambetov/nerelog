import React, { useState, useMemo, useEffect } from 'react'

import ScreenLayout from '../../components/screen-layout'
import Card from '../../components/card'
import { Flex } from '../../components/flex'
import { List } from '../../components/list'

import appsData from '../../mock-data/NeRelog_apps.json'
import clientsData from '../../mock-data/NeRelog_clients.json'

export default () => {
    const [apps] = useState(appsData)
    const [clients] = useState(clientsData)
    const [flexDirection, setFlexDirection] = useState(window.innerWidth < 720 ? 'column' : 'row')

    const mappedData = useMemo(
        () =>
            apps.map((app) => {
                const clientItem = clients.find((client) => client.id === app.client_id)

                return { appData: app, clientData: clientItem }
            }),
        [apps, clients]
    )

    const formatter = new Intl.NumberFormat(['kk', 'ru-RU'], {
        style: 'currency',
        currency: 'KZT',
        minimumFractionDigits: 0,
        currencyDisplay: 'narrowSymbol'
    })

    const onResize = () => setFlexDirection(window.innerWidth < 720 ? 'column' : 'row')

    useEffect(() => {
        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <ScreenLayout>
            <ScreenLayout.Header title="Header" />
            <ScreenLayout.Content>
                <h1>Content</h1>
                <Flex direction={flexDirection}>
                    <List>
                        {mappedData.map((data) => (
                            <Card key={data.appData.id}>
                                <Card.Title title={data.clientData.name} />
                                <Card.Content content={data.appData.type} />
                                <Card.Content content={formatter.format(data.appData.price)} />
                            </Card>
                        ))}
                    </List>
                    <div>
                        <p>
                            Cupidatat aute aliqua velit commodo est deserunt quis minim in aute.
                            Veniam occaecat amet ullamco laboris in incididunt reprehenderit id ut.
                            Commodo aliqua ullamco ex ea velit qui aute tempor fugiat aliquip velit.
                            Sint culpa et enim nulla proident ipsum quis aute nostrud dolore. Labore
                            magna eiusmod officia nisi labore non aute commodo excepteur et laboris
                            laborum ullamco laborum. Adipisicing deserunt minim esse consectetur
                            incididunt amet exercitation anim ea. Reprehenderit aliqua qui sint
                            fugiat Lorem non cupidatat sit eiusmod ullamco in.
                        </p>
                    </div>
                </Flex>
            </ScreenLayout.Content>
            <ScreenLayout.Footer>
                <h1>Footer</h1>
            </ScreenLayout.Footer>
        </ScreenLayout>
    )
}

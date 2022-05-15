import React from 'react'
import propTypes from 'prop-types'

import Card from '../card'
import { ListStyled } from './styled'

export const List = ({ list }) => {
    const formatter = new Intl.NumberFormat(['kk', 'ru-RU'], {
        style: 'currency',
        currency: 'KZT',
        minimumFractionDigits: 0,
        currencyDisplay: 'narrowSymbol'
    })

    return (
        <ListStyled>
            {list.map((data) => (
                <Card key={data.appData.id}>
                    <Card.Title title={data.clientData.name} />
                    <Card.Content content={data.appData.type} />
                    <Card.Content content={formatter.format(data.appData.price)} />
                </Card>
            ))}
        </ListStyled>
    )
}

List.propTypes = {
    list: propTypes.array
}

List.defaultProps = {
    list: []
}

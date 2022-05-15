import React, { useRef } from 'react'
import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    List as ListVirtualized
} from 'react-virtualized'
import propTypes from 'prop-types'

import Card from '../card'
import { ListStyled } from './styled'

export const List = ({ list }) => {
    const cache = useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            defaultHeight: 200
        })
    )
    const formatter = new Intl.NumberFormat(['kk', 'ru-RU'], {
        style: 'currency',
        currency: 'KZT',
        minimumFractionDigits: 0,
        currencyDisplay: 'narrowSymbol'
    })

    const rowRenderer = ({ key, index, style, parent, height }) => {
        const listItem = list[index]

        return (
            <CellMeasurer
                key={key}
                cache={cache.current}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
            >
                <div style={style}>
                    <Card style={{ height: { height } }}>
                        <Card.Title title={listItem.clientData.name} />
                        <Card.Content content={listItem.appData.type} />
                        <Card.Content content={formatter.format(listItem.appData.price)} />
                    </Card>
                </div>
            </CellMeasurer>
        )
    }

    return (
        <ListStyled>
            <AutoSizer>
                {({ width, height }) => (
                    <ListVirtualized
                        width={width}
                        height={height}
                        rowHeight={cache.current.rowHeight}
                        deferredMeasurementCache={cache.current}
                        rowCount={list.length}
                        rowRenderer={rowRenderer}
                    />
                )}
            </AutoSizer>
        </ListStyled>
    )
}

List.propTypes = {
    list: propTypes.array
}

List.defaultProps = {
    list: []
}

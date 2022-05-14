import React from 'react'

import { CardStyled, CardTitleStyled, CardContentStyled } from './styled'

const Card = (props) => <CardStyled {...props} />

const CardTitle = (props) => <CardTitleStyled {...props} />

const CardContent = (props) => <CardContentStyled {...props} />

Card.Title = CardTitle
Card.Content = CardContent

export default Card

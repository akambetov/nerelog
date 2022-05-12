import React from 'react'

import { LayoutStyled, HeaderStyled, ContentStyled, FooterStyled } from './style'

const ScreenLayout = ({ ...rest }) => <LayoutStyled {...rest} />

const HeaderSection = ({ ...rest }) => <HeaderStyled {...rest} />

const ContentSection = ({ ...rest }) => <ContentStyled {...rest} />

const FooterSection = ({ ...rest }) => <FooterStyled {...rest} />

ScreenLayout.Header = HeaderSection
ScreenLayout.Content = ContentSection
ScreenLayout.Footer = FooterSection

export default ScreenLayout

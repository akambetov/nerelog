import React from 'react'

import { LayoutStyled, HeaderStyled, ContentStyled, FooterStyled } from './styled'

const ScreenLayout = ({ ...props }) => <LayoutStyled {...props} />

const HeaderSection = ({ ...props }) => <HeaderStyled {...props} />

const ContentSection = ({ ...props }) => <ContentStyled {...props} />

const FooterSection = ({ ...props }) => <FooterStyled {...props} />

ScreenLayout.Header = HeaderSection
ScreenLayout.Content = ContentSection
ScreenLayout.Footer = FooterSection

export default ScreenLayout

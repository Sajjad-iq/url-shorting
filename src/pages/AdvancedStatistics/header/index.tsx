import React from 'react'
import { colors } from '../../../assets/GlobalStyles/colors'
import { Wrapper } from '../../../components/shared/Wrapper/Wrapper.styled'
import { H1 } from './H1.styled'
import { P } from './P.styled'

export const Header = () => {
    return (
        <Wrapper>
            <H1 color={colors.VeryDarkViolet} fontSize='1.6rem'>Advanced Statistics</H1>
            <P color="gray" fontSize='1rem'>Track how your links are performing across the web with our advanced statistics dashboard. Brand</P>
        </Wrapper>
    )
}

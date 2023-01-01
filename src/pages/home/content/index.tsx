import { colors } from '../../../assets/GlobalStyles/colors'
import { A } from './A.styled'
import { ContentWrapper } from './ContentWrapper.styled'
import { H1 } from './H1.styled'
import { P } from './P.styled'

export const Content = () => {
    return (
        <ContentWrapper>
            <H1 color={colors.DarkViolet} fontSize='2rem'>More than just shorter links</H1>
            <P color={colors.GrayishViolet} fontSize='0.9rem'>Build your brand’s recognition and get detailed insights on how your links are performing</P>
            <A>Get Started</A>
        </ContentWrapper>
    )
}

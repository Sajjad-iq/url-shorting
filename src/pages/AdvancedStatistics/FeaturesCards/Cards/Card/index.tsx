import { colors } from '../../../../../assets/GlobalStyles/colors'
import { CardWrapper } from './CardWrapper.styled'
import { FeatureImg } from './FeatureImg.styled'
import { H1 } from './H1.styled'
import { P } from './P.styled'
import { Section } from './section.styled'

interface Props {
    AlignSelf: string
    imgSrc: string
    Header: string
    Body: string
}

export const FeatureCard = (props: Props) => {
    return (
        <CardWrapper alignSelf={props.AlignSelf} >
            <Section>
                <FeatureImg src={props.imgSrc} alt="feature" />
            </Section>
            <H1 color='black' fontSize='1.2rem'>{props.Header}</H1>
            <P color={colors.GrayishViolet} fontSize='0.9rem'>{props.Body}</P>
        </CardWrapper>
    )
}

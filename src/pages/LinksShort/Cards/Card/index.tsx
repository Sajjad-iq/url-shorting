import { useState } from 'react'
import { colors } from '../../../../assets/GlobalStyles/colors'
import { Button } from './Button.styled'
import { LinkSection } from './LinkSection.styled'
import { P } from './P.styled'
import { Section } from './Section.styled'
import { Wrapper } from './Wrapper.styled'

interface Props {
    OriginalLink: string
    ShortLink: string
}

export const Card = (props: Props) => {

    const [isActive, setIsActive] = useState(false)

    const Copy = () => {
        navigator.clipboard.writeText(props.ShortLink);
        setIsActive(!isActive)
    }

    return (
        <Wrapper>
            <Section borderBottom={`0.01em solid ${colors.Gray}`}>
                <P fontSize='0.9rem' color={colors.DarkViolet}>{props.OriginalLink}</P>
            </Section>
            <LinkSection borderBottom='unset'>
                <P fontSize='0.9rem' color={colors.Cyan}>{props.ShortLink}</P>
            </LinkSection>
            {isActive
                ? <Button onClick={Copy} fontSize='1rem' MarginBottom='15px' padding='10px' color='white' BackgroundColor={colors.DarkViolet} width="90%" height='auto'>Copied!</Button>
                : <Button onClick={Copy} fontSize='1rem' MarginBottom='15px' padding='10px' color='white' BackgroundColor={colors.Cyan} width="90%" height='auto'>Copy</Button>}
        </Wrapper>
    )
}

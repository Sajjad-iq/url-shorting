import { Wrapper } from './Wrapper.styled'
import logo from "../../../assets/images/logo.svg"
import { A } from './A.styled'
import { Logo } from './Logo.styled'

export const LogoAndLinks = () => {
    return (
        <Wrapper>
            <Logo alt='logo' src={logo} />
            <Wrapper>
                <A >Features</A>
                <A >Pricing</A>
                <A >Resources</A>
            </Wrapper>
        </Wrapper>
    )
}

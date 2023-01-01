import { Wrapper } from './Wrapper.styled'
import logo from '../../assets/images/logo.svg'
import { FooterLinks } from './FooterLinks'
import { Logo } from './logo.styled'

export const Footer = () => {
    return (
        <Wrapper>
            <Logo src={logo} alt='logo' />
            <FooterLinks />
        </Wrapper>
    )
}

import { IMG } from '../../../../../components/common/IMG/IMG.styled'
import { Wrapper } from './Wrapper.styled'
import ins from "../../../../../assets/images/icon-instagram.svg"
import face from "../../../../../assets/images/icon-facebook.svg"
import pint from "../../../../../assets/images/icon-pinterest.svg"
import tweet from "../../../../../assets/images/icon-twitter.svg"
import { A } from './A.styled'

export const SocialMediaIcons = () => {
    return (
        <Wrapper>
            <A><IMG alt="icon" src={ins} width='25px' height='25px' /></A>
            <A><IMG alt="icon" src={face} width='25px' height='25px' /></A>
            <A><IMG alt="icon" src={pint} width='25px' height='25px' /></A>
            <A><IMG alt="icon" src={tweet} width='25px' height='25px' /></A>
        </Wrapper>
    )
}

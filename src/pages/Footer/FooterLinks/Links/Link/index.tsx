import { colors } from "../../../../../assets/GlobalStyles/colors"
import { H1 } from "../../../../../components/common/H1/H1.styled"
import { A } from "./A.styled"
import { Wrapper } from "./Wrapper.styled"

interface Props {
    header: string
    firstLink: string
    secondLink: string
    thirdLink: string
}

export const Link = (props: Props) => {
    return (
        <Wrapper>
            <H1 color={colors.VeryDarkViolet} fontSize="1.2rem">{props.header}</H1>
            <A target={"_blank"} href="#">{props.firstLink}</A>
            <A target={"_blank"} href="#">{props.secondLink}</A>
            <A target={"_blank"} href="#">{props.thirdLink}</A>
        </Wrapper>
    )
}

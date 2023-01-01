import { Dispatch, SetStateAction } from "react"
import { A } from "../../../components/common/A/A.styled"
import { BorderTopSection } from "./BorderTopSection.styled"
import { ButtonsCardsWrapper } from "./ButtonsCardsWrapper.styled"
import { Wrapper } from "./Wrapper.styled"
interface Props {
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
}
export const ButtonsCard = (props: Props) => {

    const close = () => props.setIsActive(!props.isActive)

    return (
        <Wrapper display={props.isActive === true ? "flex" : "none"}>
            <ButtonsCardsWrapper>
                <A onClick={close}>Features</A>
                <A onClick={close}>Pricing</A>
                <A onClick={close}>Resources</A>
                <BorderTopSection>
                    <A onClick={close}>Login</A>
                    <A onClick={close}>sign Up</A>
                </BorderTopSection>
            </ButtonsCardsWrapper>
        </Wrapper>
    )
}

import { AuthButtons } from "./AuthButtons"
import { LogoAndLinks } from "./LogoAndLinks"
import { Wrapper } from "./Wrapper.styled"

export const NormalNav = () => {
    return (
        <Wrapper>
            <LogoAndLinks />
            <AuthButtons />
        </Wrapper>
    )
}

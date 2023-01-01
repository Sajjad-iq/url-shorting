import { IMG } from "./IMG.styled"
import work from "../../assets/images/illustration-working.svg"
import { Content } from "./content"
import { Wrapper } from "./Wrapper.styled"

export const Home = () => {
    return (
        <Wrapper>
            <IMG src={work} alt="work" />
            <Content />
        </Wrapper>
    )
}

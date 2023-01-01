import { Cards } from './Cards'
import { ShortService } from './ShortService'
import { Wrapper } from './Wrapper.styled'

export const LinkShorts = () => {
    return (
        <Wrapper>
            <ShortService />
            <Cards />
        </Wrapper>
    )
}

import { FeatureCard } from './Card'
import { Wrapper } from './Wrapper.styled'
import firstImg from '../../../../assets/images/icon-brand-recognition.svg'
import SecondImg from '../../../../assets/images/icon-detailed-records.svg'
import ThirdImg from '../../../../assets/images/icon-fully-customizable.svg'
import { data } from "./data"
export const Cards = () => {
    return (
        <Wrapper>
            {data.map((e, i) => {
                return <FeatureCard key={e.header} Header={e.header} Body={e.body} AlignSelf={e.flex} imgSrc={i === 0 ? firstImg : "" || i === 1 ? SecondImg : "" || i === 2 ? ThirdImg : ""} />
            })}
        </Wrapper>
    )
}

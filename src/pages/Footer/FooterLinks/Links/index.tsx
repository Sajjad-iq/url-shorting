import { Link } from "./Link"
import { stockData } from "./stockData"
import { Wrapper } from "./Wrapper.styled"

export const Links = () => {
  return (
    <Wrapper>
      {stockData.map((e: any) => {
        return <Link header={e.header} firstLink={e.firstLink} secondLink={e.secondLink} thirdLink={e.thirdLink} />
      })}
    </Wrapper>
  )
}

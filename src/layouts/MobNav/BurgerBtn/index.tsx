import { Button } from "../../../components/common/Button/Button.styled"
import { IMG } from "../../../components/common/IMG/IMG.styled"
import menu from '../../../assets/images/menu.svg'

interface Props {
    onCLICK: () => void
}

export const BurgerBtn = (props: Props) => {

    return (
        <Button padding="unset" color="unset" fontSize="unset" MarginBottom="unset" BackgroundColor="unset" onClick={props.onCLICK} width="40px" height="auto">
            <IMG alt="nav" src={menu} width="100%" height="auto" />
        </Button>
    )
}

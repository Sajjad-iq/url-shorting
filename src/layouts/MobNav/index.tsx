import { Logo } from '../../components/common/Logo/Logo.styled'
import { MobNavWrapper } from './MobNavWrapper.styled'
import logo from '../../assets/images/logo.svg'
import { BurgerBtn } from './BurgerBtn'
import { ButtonsCard } from './ButtonsCard'
import { useState } from 'react'

export const MobNav = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <MobNavWrapper>
            <Logo src={logo} alt='logo' />
            <BurgerBtn onCLICK={() => setIsActive(!isActive)} />
            <ButtonsCard setIsActive={setIsActive} isActive={isActive} />
        </MobNavWrapper>
    )
}

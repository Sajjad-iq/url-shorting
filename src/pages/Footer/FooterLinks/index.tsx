import React from 'react'
import { Links } from './Links'
import { SocialMediaIcons } from './Links/socialMediaLinks'
import { Wrapper } from './Wrapper.styled'

export const FooterLinks = () => {
    return (
        <Wrapper>
            <Links />
            <SocialMediaIcons />
        </Wrapper>
    )
}

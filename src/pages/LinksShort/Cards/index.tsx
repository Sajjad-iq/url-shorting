import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../Context'
import { Card } from './Card'

export const Cards = () => {

    const { links, count, setCount } = useContext(Context)

    return (
        links !== null ? links.map((e: any) => {
            return <Card key={e.code} OriginalLink={e.original_link} ShortLink={e.full_short_link} />
        })
            : null
    )
}

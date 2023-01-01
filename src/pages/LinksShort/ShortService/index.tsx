import { useContext, useEffect, useMemo, useState } from "react"
import { useAxios } from "../../../services/useAxios"
import { CardForm } from "./CardForm.styled"
import { INPUT } from "./Input.styled"
import { ShortItBtn } from "./ShortBtn.styled"
import { options } from "../../../services/options"
import { Context } from "../../../Context"

export const ShortService = () => {

    const [input, setInput] = useState("")
    options.params.url = input
    const [loading, data, error, request] = useAxios<any>(options)
    const memoLinks: any = useMemo(() => {
        return []
    }, [])
    const { setLinks, links, count, setCount } = useContext(Context)

    const setUrl = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)
    const Submit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        request()
    }

    useEffect(() => {
        if (data !== undefined) {
            memoLinks.push(data.result)
            setLinks(memoLinks)
            setCount(count + 1)
        }
    }, [data])

    console.log(links)
    return (
        <CardForm onSubmit={Submit}>
            <INPUT onChange={setUrl} placeholder="Shorten a link here..." />
            <ShortItBtn>Shorten It!</ShortItBtn>
        </CardForm>
    )
}

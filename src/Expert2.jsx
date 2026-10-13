import Expert1 from "./Expert1"

import { useEffect, useState } from "react"

export default function Expert2() {
    const [data, setData] = useState([])

    useEffect(() => {

        async function getData() {
            let response = await fetch("http://localhost:8000/experts2")
            let result = await response.json()
            setData(result)
        }
        getData()
    }, [])

    return (
        <Expert1 experts={data}/>
    )
}
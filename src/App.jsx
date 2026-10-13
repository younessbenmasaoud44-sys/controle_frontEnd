import { useState } from 'react'
import expertData from "./data.js"
import Expert1 from './Expert1.jsx'
import Formulaire from './formulaire.jsx'
function App() {
    console.log(expertData)
    return(
        <>
            <Expert1 experts={expertData}/>
            <Formulaire></Formulaire>
        </>
    )
}

export default App

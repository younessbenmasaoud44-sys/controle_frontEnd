import { useState } from "react";
export default function Formulaire() {
    const [theme,setTheme] = useState()
    const [dateDebut,setdateDebut] = useState()
    const [dateFin, setdateFin] = useState()
    const [cout,setCout] = useState()
    const [expert, setExpert] = useState()
    const [phrase, setPhrase] = useState("")

    function confirmer(e) {
        e.preventDefault()
        let total = (new Date(dateFin) - new Date(dateDebut)) * cout
        setPhrase(`l'expert: ${expert} assurera le theme: ${theme},avec un cout journalier :${cout}DH. pour une duree de :${new Date(dateFin) - new Date(dateDebut)} jours, soit un cout total de :${total}`)

    }
    return(
        <>
            <h1 style={{textAlign: "center"}}>Formulaire de l'Evenements</h1>
            <form className="formulaire">
                <label htmlFor="theme">Theme:</label>
                <input type="text" name="theme" onChange={(e)=> setTheme(e.target.value)}/>

                <label htmlFor="dateDebut">date_debut:</label>
                <input type="date" name="dateDebut" onChange={(e)=>setdateDebut(e.target.value)}/>

                <label htmlFor="dateFin">date_fin:</label>
                <input type="date" name="dateFin" onChange={(e)=>setdateFin(e.target.value)}/>

                <label htmlFor="cout">Cout:</label>
                <input type="number" name="cout" onChange={(e)=>setCout(e.target.value)}/>

                <label htmlFor="expert">Expert:</label>
                <input type="text" name="expert" onChange={(e)=>setExpert(e.target.value)}/>

                <button type="submit" onClick={confirmer}>confirmer</button>
            </form>

            <p style={{textAlign: "center"}}>{phrase}</p>
        </>
    )
}
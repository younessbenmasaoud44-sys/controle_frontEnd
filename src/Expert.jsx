import Evenements from "./Evenements";

export default function Expert(props) {
    let {given} = props
    return(
        <li>
            <h1>{given["nom_complet"]}</h1>
            <Evenements data ={given["événements"]}></Evenements>
        </li>
    )
}
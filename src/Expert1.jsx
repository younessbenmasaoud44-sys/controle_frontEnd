import Expert from "./Expert"
export default function Expert1(props) {
    let {experts} = props
    return(
        <ul>
            {experts.map(x=><Expert given={x}/>)}
        </ul>
    )

}
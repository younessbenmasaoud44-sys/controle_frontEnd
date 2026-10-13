export default function Evenements(props) {
    let {data} = props
    let evenements = data
    let count = 0
    return(
        <>
            <table className="tbl" border={1}>
                <thead>
                    <tr>
                        <th>thème</th>
                        <th>date_debut</th>
                        <th>date_fin</th>
                        <th>description</th>
                        <th>cout_journalier</th>
                        <th>durée</th> 
                        <th>total</th>
                    </tr>
                   
                </thead>
                <tbody>
                        {evenements.map(x => {
                        let total = x["durée"] * x["cout_journalier"]
                        count+= total
                        return(
                        <tr>
                                <td>{x["thème"]}</td>
                                <td>{x["date_debut"]}</td>
                                <td>{x["date_fin"]}</td>
                                <td>{x["description"]}</td>
                                <td>{x["cout_journalier"]}</td>
                                <td>{x["durée"]}</td>
                                <td>{total}</td>
                            </tr> 
                        )
                    })}
                </tbody>
                
            </table>
            <p>Total des couts des evenements assures est : {count}</p>
        </>
        
    )
}
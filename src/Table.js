import { useState } from "react"

const records = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]



export default function Table() {

    const [update , setUpdate] = useState([...records])

    function handleDate() {

        setUpdate([])
        const result = [...records].sort((a,b) => (new Date(b.date)- new Date(a.date)))
        setUpdate(result)
    }

    function handleViews() {
        setUpdate([])
        const result = [...records].sort((a,b) => (new Date(b.views)- new Date(a.views)))
        setUpdate(result)
    }



    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={handleDate}>Sort by Date</button>
            <button onClick={handleViews}>Sort by Views</button>
            <div style={{display:"flex", justifyContent:"center"}}>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Views</td>
                            <td>Article</td>
                        </tr>
                    
                    </thead>
                    <tbody>
                        {update.map((item) => (
                            
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.views}</td>
                                    <td>{item.article}</td>
                                </tr>
                                
                            
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}
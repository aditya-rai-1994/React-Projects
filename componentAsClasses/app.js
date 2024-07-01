let cards = data.map((courses, i)=>{
    return(
        <Card Key={i} data={courses}/>
    )
})
console.log(cards)
ReactDOM.render(
    <div className = "row">
           {cards}
            </div>,
            document.getElementById('root')
)

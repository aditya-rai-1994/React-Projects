class CitiesContainer extends React.Component{
    render(){
        const cities = this.props.data.map((city,i)=>{
            const randomImage = `https://source.unsplash.com/random/${400 + i}x300/?city,night`
            return(
                <City key={i} city={city} image={randomImage} />
            )
        })
        return(
            <div className="row">
                <div className="cities center-align">
                    {cities}
                </div>
            </div>
        )
    }
}
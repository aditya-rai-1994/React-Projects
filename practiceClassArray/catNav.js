// change this Component to a class!
class CatNav extends React.Component {
    render() {
        console.log(this.props);
        const navlinks = this.props.data.map((link, i)=>{
            return(
                <li key={i} className="cat-link left valign-wrapper">
                  <i className="material-icons">{link.icon}</i>{link.title}
                </li>
            )
        })
        console.log(navlinks);
        return (
            <div className="row">
               <ul className="cat-nav center-align">
                {navlinks}
                </ul>
            </div>
        )
    }
}
/*
<div class="row">
        <ul class="cat-nav center-align">
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">code</i>Development
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">business</i>Business
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">computer</i>IT & Software
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">library_books</i>Office Productivity
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">person</i>Personal Development
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">mode_edit</i>Personal Development
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">track_changes</i>Marketing
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">directions_bike</i>Health & Fitness
            </li>
            <li class="cat-link left valign-wrapper">
                <i class="material-icons">music_note</i>Music
            </li>
        </ul>
    </div>
*/
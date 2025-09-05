import './NavBar.css'

function NavBar(){

    return (
    <div className="NavBar">
        <div id="logo">
            <a href="https://www.care.org/our-work/where-we-work/cameroon/" target='_blank'>
                <img src="public/care.png" alt="logo de l'entreprise" />
            </a>
        </div>

        <div id="nav-right">
            <div id="contact">
                <img src="public/icons8-téléphone-100.png" alt="Téléphone" />
                <a href="tel:+237696616735">
                  Numéro Vert : +237 696 616 735
                </a>
            </div>
            <a href="https://www.care.org/our-work/where-we-work/cameroon/" target="_blank" rel="noopener noreferrer" id="help-link">
                <img src="public/icons8-aide-64.png" alt="Aide" />
            </a>

        </div>
    </div>
)
}

export default NavBar
import Logo from '../../assets/Logo.png'

import '../../utils/style/footer.css'


function Footer() {
     return (
        <footer>
            <img className="footer-logo" src={Logo} alt="Logo société Kasa"/>
            <p className="footer-text"> © 2020 Kasa. All rights reserved</p>
        </footer>
     )
}

export default Footer
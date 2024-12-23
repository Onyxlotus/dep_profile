import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import codeWars from "./../../img/icons/icons8-codewars-24.svg"

import "./style.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/onyxlotus21805" target="_blank" rel="noreferrer"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/desmond_2664" target="_blank" rel="noreferrer"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/Onyxlotus" target="_blank" rel="noreferrer"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://www.codewars.com/users/Onyxlotus" target="_blank" rel="noreferrer"><img src={codeWars} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 github.com/Onyxlotus</p>
                    </div>
                </div>
            </div>
        </footer>
      );
}
 
export default Footer;
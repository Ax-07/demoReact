import lettreK from "../assets/images/lettre_K.svg";
import lettreA from "../assets/images/lettre_A.svg";
import lettreS from "../assets/images/lettre_S.svg";
import icon from "../assets/images/icon.svg";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img className="footer__logo-K" src={lettreK} alt="lettre K" />
                <img className="footer__logo-icon" src={icon} alt="lettre A" />
                <img className="footer__logo-S" src={lettreS} alt="lettre S" />
                <img className="footer__logo-A" src={lettreA} alt="lettre A" />
            </div>
            <div className="footer__copyright">© 2020 Kasa. All rights reserved</div>
        </div>
    );
};

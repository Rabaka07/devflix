// para utilizar o componente crie o import na pagina que deseja
// coloque o nome da pessoa entre <Footer>Nome da Pessoa</Footer>
// passe a informacao dentro da tag Footer - LINK
// <Footer link={}>Rabaka</Footer>
import "./footer.module.css"
import SocialLinks from "../socialLinks/socialLinks";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"


const Footer =({children, Link})=>{
    return(
        <footer>
            <p>
                Feito com<ion-icon name="heart"/> por{" "}
                <a href={Link} target="_blank" >{children}</a></p>
                <SocialLinks icon={"logo-github"} href={"https://github.com/Rabaka07"}/>
                <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/eo_rabaka/"}/>
                <SocialLinks icon={"logo-xbox"} href={"https://account.xbox.com/pt-BR/Profile?xr=shellnav&csrf=zKQKFTCZ0W0agc5vpRw-LbP63h3QunMggm8oO0iaK-qZI_wM3eyRfnfVuewUo3_Cqc6_eBb0nC9WuEi3MUvZOA9QGTQ1&wa=wsignin1.0"}/>
                <SocialLinks icon={"logo-tiktok"} href={"https://www.tiktok.com/@eo_rabaka?lang=pt-BR"}/>

        </footer>
    );
};

export default Footer;
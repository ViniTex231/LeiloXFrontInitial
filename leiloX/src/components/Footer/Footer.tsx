import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>LeiloX @ {new Date().getFullYear()}</p>
                <p>LeiloX plataforma de investimento em leilões com IA</p>
            </div>
            <div className="footer-right">
                <a href="#">Carreiras</a>
                <a href="#">Privacidade</a>
            </div>
        </footer>
    )
}

export default Footer
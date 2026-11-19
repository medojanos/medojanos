import LOGO from "/logo_light.svg";

export default function Footer() {
    return (
        <footer>
            <div className="container py-5">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <img src={LOGO} width={40} className="me-3 border rounded-2"></img>
                        <div>
                            <span>MeadowHub</span><br/>
                            <span className="text-secondary">by medojanos</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center text-end">
                        <a className="nav-link" href="https://linktr.ee/medojanos" target="_blank">Connect</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
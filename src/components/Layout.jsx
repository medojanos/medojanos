import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children, theme = "default"}) {
    return (
        <>
            <div className={`layout ${theme}`}>
                <Header />
                {children}
            </div>
            <Footer />
        </>
    )
}
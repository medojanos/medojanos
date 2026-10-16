import Navbar from "./Navbar";

export default function Banner({id}) {
    return (
        <>
            <div 
                id={id}
                className="mb-5 pb-2 d-flex align-items-center justify-content-center"
                style={{height: "10rem"}}
            >
                <Navbar/>
            </div>
        </>
    )
}
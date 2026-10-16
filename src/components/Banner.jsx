export default function Banner({title, light = false}) {
    return (
        <div 
            id={title.toLowerCase()}
            className="my-5"
            style={{height: "10rem"}}>
            <h3 
                className="p-4 fw-bold"
                style={{color: light ? "inherit" : "whitesmoke"}}>
                {title}
            </h3>
        </div>
    )
}
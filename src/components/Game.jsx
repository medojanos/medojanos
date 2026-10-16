export default function Game({name, img, description, imagePos = "center 25%", playable = true}) {
    return (
        <div className="mb-5">
            <div style={{
                borderRadius: "1rem",
                overflow: "hidden",
                background: `linear-gradient(to bottom, transparent, beige), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: imagePos,
                height: img ? "15rem" : "0"
            }}/>
            <div className="row align-items-center">
                <div className="col">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="col-auto">
                    <a href={`/games/${name.toLowerCase().replace(/ /g, '')}/index.html`} target="_blank"><button disabled={!playable}>Play</button></a>
                </div>
            </div>
        </div>
    )
}
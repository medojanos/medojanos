export default function Game({title, description, img, url}) {
    return (
        <div className="col">
            <a href={url} target="_blank">
                <div className="game-box">  
                    <img src={img}/>
                    <div className="p-3">
                        <p>{title}</p>
                        <p className="text-secondary">{description}</p>
                        <span>Play now</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
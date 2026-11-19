export default function Project({title, description, img, url}) {
    return (
        <div className="col">
            <a href={url} target="_blank">
                <div className="project-box d-flex">
                    <img src={img}/>
                    <div className="p-3">
                        <p>{title}</p>
                        <p className="text-secondary">{description}</p>
                        <span>Try it out</span>
                    </div>
                </div>
            </a>
        </div>
    )
}
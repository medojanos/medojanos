export default function Project({name, img, description, url}) {
    return (
        <div className="col">
            <div style={{ height: '6rem' }} className="d-flex">
                <a href={url} target="_blank">
                    <img style={{ height: '100%' }} className="align-self-center expanding rounded-3" src={img} alt={name}/>
                </a>
                <div className="flex-grow-1 d-flex flex-column px-3 py-1">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default function Project({name, img, description, fullWidth = false, url}) {
    return (
        <div className={fullWidth ? "col-12" : "col"}>
            <div style={{ height: '6rem' }} className="rounded-3 d-flex overflow-hidden">
                <img style={{ height: '100%' }} className="align-self-center" src={img} alt={name}/>
                <div className="flex-grow-1 d-flex flex-column px-3 py-1">
                    <h4 className="text-center"><a href={url} target="_blank">{name}</a></h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
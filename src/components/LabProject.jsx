export default function Project({project}) {
    const {img, title, small_description, url, repo} = project;
    return (
        <div className="d-flex justify-content-between box p-4">
            <div className="d-flex">
                <img src={img}></img>
                <div className="ms-3">
                    <h3>{title}</h3>
                    <p className="text-accent">{small_description}</p>
                </div>
            </div>
            <div>
                <a href={repo} target="_blank">GitHub</a>
                {url && <a href={url} target="_blank">Website</a>}
            </div>
        </div>
    )
}
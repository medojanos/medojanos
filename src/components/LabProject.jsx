export default function Project({project}) {
    const {img, title, small_description, url, repo} = project;
    return (
        <div className="d-flex box p-4">
            <img className="img-fluid" src={img}></img>
            <div className="row row-cols-1 row-cols-md-2 w-100 ms-3">
                <div className="col">
                    <h3>{title}</h3>
                    <p className="text-accent">{small_description}</p>
                </div>
                <div className="col text-end">
                    <a href={repo} target="_blank">GitHub</a>
                    {url && <a href={url} target="_blank">Website</a>}
                </div>
            </div>
        </div>
    )
}
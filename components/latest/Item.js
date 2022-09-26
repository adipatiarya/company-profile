export default function item({data}) {

    const {image, title, description, link, url} = data;

    return (
        <div className="item row">
            <a className="col-md-4 col-12" href={url} target="_blank">
            <img className="img-fluid project-image rounded shadow-sm" src={image} alt="project name" />
            </a>
            <div className="desc col-md-8 col-12">
                <h3 className="title"><a href={title.url} target="_blank">{title.name}</a></h3>
                <p className="mb-2">{description}</p>
                <p><a className="more-link" href={link} target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
            </div>
        </div>
    );
};
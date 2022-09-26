export default function item({data}) {

    const {title, description, price, link, url} = data;

    return (
        <div className="item">
            <h3 className="title"><a href={url}>{title}</a> <span className="badge badge-theme">{price}</span></h3>
            <p className="summary">{description}</p>
            <p><a className="more-link" href={link}><i className="fas fa-external-link-alt"></i>Download Now</a></p>
        </div>
    );
};
export default function item({data}) {

    const {title,subtitle, year,description,url} = data;

    return (
        <div className="item">
            <h3 className="title">{title} - <span className="place"><a href={url}>{subtitle}</a></span> <span className="year">({year})</span></h3>
            <p>{description}</p>
        </div>
    );
};
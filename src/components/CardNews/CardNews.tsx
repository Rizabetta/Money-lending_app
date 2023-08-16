import defaultImage from "../../assets/png/news_3.png";

interface CardProps {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

export default function CardNews({
  url,
  urlToImage,
  title,
  description,
}: CardProps) {
  return (
    <div className="news__card">
      <a href={url ?? "# "}>
        <img
          src={urlToImage ?? defaultImage}
          className="card__image"
          alt="CardNews"
        ></img>
        <h4 className="card__h4">{title}</h4>
        <p className="card__description">{description}</p>
      </a>
    </div>
  );
}

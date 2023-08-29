import defaultImage from "../../assets/png/news_3.png";
import { useState } from "react";

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
  const [imageUrl, setImageUrl] = useState<string>(
    urlToImage
  );
  const handleImageError = () => {
    setImageUrl(defaultImage);
  };

  return (
    <div className="news__card">
      <a href={url ?? "# "}>
        <img
          src={imageUrl ?? defaultImage}
          onError={handleImageError}
          className="card__image"
          alt="CardNews"
        ></img>
        <h4 className="card__h4">{title}</h4>
        <p className="card__description">{description ?? title}</p>
      </a>
    </div>
  );
}

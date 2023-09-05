import defaultImage from "../../../../assets/png/news_3.png";
import { useState } from "react";
import { TCardProps } from "../News.type";

function CardNews({ url, urlToImage, title, description }: TCardProps) {
  const [imageUrl, setImageUrl] = useState<string>(urlToImage);
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
        <h4 className="card__h4">{title?? "Grayscale's SEC Victory Does Not Ensure Bitcoin Spot ETF Approval - CoinDesk"}</h4>
        <p className="card__description">{description ?? title ?? "Grayscale's SEC Victory Does Not Ensure Bitcoin Spot ETF Approval - CoinDesk"}</p>
      </a>
    </div>
  );
}

export { CardNews };

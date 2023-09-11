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
        <h4
          className="card__h4"
          dangerouslySetInnerHTML={
            { __html: title } ??
            "Grayscale's SEC Victory Does Not Ensure Bitcoin Spot ETF Approval - CoinDesk"
          }
        />
        <p
          className="card__description"
          dangerouslySetInnerHTML={
            { __html: description } ?? { __html: title } ??
            "Grayscale's SEC Victory Does Not Ensure Bitcoin Spot ETF Approval - CoinDesk"
          }
        />
      </a>
    </div>
  );
}

export { CardNews };

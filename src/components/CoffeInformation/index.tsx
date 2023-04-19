import "./style.scss";
import tradicional_express from "../../assets/tradicional_express.png";

interface CoffeInformationProps {
  image: string;
  type: string;
  quantity: number;
  unitPrice: number;
}

export function CoffeInformation({ image, type }: CoffeInformationProps) {
  return (
    <div className="coffe-information-container">
      <img src={image} />
      <div className="type-and-quantity">
        <h6>{type}</h6>
        <div className="coffe-quantity">
          <span></span>
        </div>
      </div>
    </div>
  );
}

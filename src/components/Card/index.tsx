import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import "./style.scss";

interface CardProps {
  image: string;
  options: string[];
  title: string;
  description: string;
  price: string;
}

export function Card({ image, options, title, description, price }: CardProps) {
  return (
    <div className="card-container">
      <img src={image} />
      <div className="card-options-container">
        {options.map((option) => {
          return (
            <span className="card-options">
              <h4>{option}</h4>
            </span>
          );
        })}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="coffe-details-container">
        <div>
          R$ <span className="coffe-price">{price}</span>
        </div>
        <div className="coffe-quantity-container">
          <button>
            <Minus size={14} />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} />
          </button>
        </div>
        <button className="coffe-cart">
          <ShoppingCart size={22} weight="fill" color="var(--white)" />
        </button>
      </div>
    </div>
  );
}

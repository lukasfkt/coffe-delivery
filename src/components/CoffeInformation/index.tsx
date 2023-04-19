import "./style.scss";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

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
          <div>
            <button>
              <Minus size={14} color="var(--purple)" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} color="var(--purple)" />
            </button>
          </div>
          <button className="remove-button">
            <Trash size={16} color="var(--purple)" />
            <p>REMOVER</p>
          </button>
        </div>
      </div>
    </div>
  );
}

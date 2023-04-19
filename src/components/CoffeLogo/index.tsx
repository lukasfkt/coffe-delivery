import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import coffeLogo from "../../assets/coffe-logo.png";
import "./style.scss";

export function CoffeLogo() {
  return (
    <section className="logo-container">
      <div className="page-description">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p className="subtitle-description">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="page-qualities-container">
          <div className="icons-container">
            <div>
              <span
                className="icons-circle"
                style={{ background: "var(--yellow-dark)" }}
              >
                <ShoppingCart size={16} weight="fill" color="var(--white)" />
              </span>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <span
                className="icons-circle"
                style={{ background: "var(--yellow)" }}
              >
                <Timer size={16} weight="fill" color="var(--white)" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>
          <div className="icons-container">
            <div>
              <span
                className="icons-circle"
                style={{ background: "var(--base-text)" }}
              >
                <Package size={16} weight="fill" color="var(--white)" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <span
                className="icons-circle"
                style={{ background: "var(--purple)" }}
              >
                <Coffee size={16} weight="fill" color="var(--white)" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>
        </div>
      </div>
      <img src={coffeLogo} />
    </section>
  );
}

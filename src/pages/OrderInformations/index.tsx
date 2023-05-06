import "./style.scss";
import motoboy from "../../assets/motoboy.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function OrderInformations() {
  return (
    <main className="order-informations-container">
      <section>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </section>
      <section>
        <div className="order-box-container">
          <div>
            <span
              className="icons-circle"
              style={{ background: "var(--purple)" }}
            >
              <MapPin size={16} weight="fill" color="var(--white)" />
            </span>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </div>
          <div>
            <span
              className="icons-circle"
              style={{ background: "var(--yellow)" }}
            >
              <Timer size={16} weight="fill" color="var(--white)" />
            </span>
            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </div>
          <div>
            <span
              className="icons-circle"
              style={{ background: "var(--yellow-dark)" }}
            >
              <CurrencyDollar size={16} color="var(--white)" />
            </span>
            <p>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </p>
          </div>
        </div>
        <img src={motoboy} alt="Imagem de um motoboy" />
      </section>
    </main>
  );
}

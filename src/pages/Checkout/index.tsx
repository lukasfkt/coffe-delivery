import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import "./style.scss";
import { CoffeInformation } from "../../components/CoffeInformation";
import tradicional_express from "../../assets/tradicional_express.png";

export function Checkout() {
  return (
    <main className="checkout-container">
      <section className="left-container">
        <h4>Complete seu pedido</h4>
        <div className="address-informations">
          <div className="address-description">
            <MapPinLine size={22} color="var(--yellow-dark)" />
            <span>
              <h6>Endereço de Entrega</h6>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </div>

          <form>
            <input type="text" placeholder="CEP" style={{ width: "12.5rem" }} />
            <input type="text" placeholder="Rua" />
            <div>
              <input type="number" placeholder="Número" />
              <div className="input-complement">
                <input type="text" placeholder="Complemento" />
                <span>Opicional</span>
              </div>
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input
                type="text"
                placeholder="Cidade"
                style={{ width: "17.25rem" }}
              />
              <input
                type="text"
                placeholder="UF"
                style={{ width: "3.75rem" }}
              />
            </div>
          </form>
        </div>

        <div className="payment-container">
          <div className="payment-description">
            <CurrencyDollar size={22} color="var(--purple)" />
            <span>
              <h6>Pagamento</h6>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </div>

          <div className="payment-method">
            <button>
              <CreditCard size={16} color="var(--purple)" />
              <p>CARTÃO DE CRÉDITO</p>
            </button>
            <button>
              <Bank size={16} color="var(--purple)" />
              <p>CARTÃO DE DÉBITO</p>
            </button>
            <button>
              <Money size={16} color="var(--purple)" />
              <p>DINHEIRO</p>
            </button>
          </div>
        </div>
      </section>

      <section className="right-container">
        <h4>Cafés selecionados</h4>

        <div className="request-informations">
          <CoffeInformation
            image={tradicional_express}
            type="Expresso Tradicional"
            quantity={1}
            unitPrice={9.9}
          />
        </div>
      </section>
    </main>
  );
}

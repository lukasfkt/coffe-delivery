import "./style.scss";
import { CoffeLogo } from "../../components/CoffeLogo";
import { Card } from "../../components/Card";
import tradicional_express from "../../assets/tradicional_express.png";

export function Home() {
  return (
    <>
      <CoffeLogo />
      <main className="home-container">
        <h1>Nossos cafés</h1>

        <section className="menu-container">
          <Card
            image={tradicional_express}
            options={["TRADICIONAL"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
          />
          <Card
            image={tradicional_express}
            options={["TRADICIONAL"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
          />
          <Card
            image={tradicional_express}
            options={["TRADICIONAL"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
          />
          <Card
            image={tradicional_express}
            options={["TRADICIONAL"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
          />
          <Card
            image={tradicional_express}
            options={["TRADICIONAL"]}
            title="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
          />
        </section>
      </main>
    </>
  );
}

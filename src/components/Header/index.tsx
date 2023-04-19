import { NavLink } from "react-router-dom";
import logoCoffe from "../../assets/Logo.svg";

import "./style.scss";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <header>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} />
      </NavLink>
      <div>
        <span>
          <MapPin color="var(--purple)" weight="fill" size={22} /> Porto Alegre,
          RS
        </span>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" color="var(--yellow-dark)" />
        </NavLink>
      </div>
    </header>
  );
}

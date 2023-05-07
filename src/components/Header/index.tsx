import { NavLink } from "react-router-dom";
import logoCoffe from "../../assets/Logo.svg";

import "./style.scss";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useLocationUserClient } from "../../hooks/LocationUserHook";
import { ComponentLoad } from "../Load";

export function Header() {
  const { load, data, err } = useLocationUserClient();

  return (
    <header>
      <NavLink to="/" title="Home">
        <img src={logoCoffe} />
      </NavLink>
      <div>
        {!load && !err ? (
          <span>
            <ComponentLoad /> 
          </span>
        ): (
          <span>
            <MapPin color="var(--purple)" weight="fill" size={22} /> {data?.city}, {data?.region_code}
          </span>
        )}
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={22} weight="fill" color="var(--yellow-dark)" />
        </NavLink>
      </div>
    </header>
  );
}

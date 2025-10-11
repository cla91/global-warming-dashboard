import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/temperature">Temperature</NavLink>
        </li>
        <li>
          <NavLink to="/carbon-dioxide">Carbon Dioxide</NavLink>
        </li>
        <li>
          <NavLink to="/methane">Methane</NavLink>
        </li>
        <li>
          <NavLink to="/nitrous-oxide">Nitrous Oxide</NavLink>
        </li>
        <li>
          <NavLink to="/polar-ice">Polar Ice</NavLink>
        </li>
      </ul>
    </nav>
  );
}

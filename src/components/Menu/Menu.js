import SearchInput from "./SearchInput";
import "./sass/app.scss";
import BestSales from "../BestSales/BestSales";

const Menu = () => {
  return (
    <div className="sectionContainer">
      <nav>
        <ul className="list">
          <li><a href="Menu">menu</a></li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li><a href="././comonent/BestSales/BestSales.js">promotions</a></li>
          <li>
            <SearchInput />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

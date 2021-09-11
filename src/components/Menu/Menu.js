import SearchInput from "./SearchInput";
import BestSales from "../BestSales/BestSales";
import "./sass/app.scss";

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
          <li><a href="BestSales">promotions</a></li>
          <li>
            <SearchInput />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

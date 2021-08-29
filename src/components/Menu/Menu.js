import SearchInput from "./SearchInput";

import "./sass/app.scss";

const Menu = () => {
  return (
    <div className="sectionContainer">
      <nav>
        <ul className="list">
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>menu</li>
          <li>promotions</li>
          <li>
            <SearchInput />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

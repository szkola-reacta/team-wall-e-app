import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

import "./sass/app.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-img">LOGO</div>
      </div>
      <div className="text">
        <h4>welcome in wall-e</h4>
      </div>
      <div className="buttons">
        <div className="icon">
          <AccountCircleRoundedIcon />
        </div>
        <div className="icon">
          <ShoppingCartRoundedIcon />
        </div>
        <div className="icon">
          <StarRoundedIcon />
        </div>
      </div>
    </header>
  );
};
export default Header;

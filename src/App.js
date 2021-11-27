import Header from "./components/Header";
import Menu from "./components/Menu";
import BestSales from "./components/BestSales/BestSales";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <BestSales />
    </div>
  );
};

export default App;

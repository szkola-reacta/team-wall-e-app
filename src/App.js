import Header from "./components/Header";
import Menu from "./components/Menu";
import CategorySection from "./components/CategorySection";
import "./App.css";

// data
const categoryList = ['category 1','category 2','category 3','category 4','category 5','category 6','category 7','category 8','category 9',
  'category 10','category 11','category 12','category 13','category 14','category 15','category 16','category 17','category 18','category 19',
  'category 20','category 21','category 22','category 23','category 24','category 25','category 26'];

const App = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <CategorySection label="Popular section:" list={categoryList}/>
      <CategorySection label="Best sales:" list={categoryList}/>
    </div>
  );
};

export default App;

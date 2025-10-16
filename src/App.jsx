import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CategorySelector from "./components/CategorySelector/categorySelector";
import Input from "./components/questionArea/input";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CategorySelector />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
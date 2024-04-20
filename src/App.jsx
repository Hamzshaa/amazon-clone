import CarouselComponent from "./components/Carousel/CarouselComponent";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="p-0 m-0 font-sans">
      <Header />
      <CarouselComponent />
      <Category />
      <Product />
    </div>
  );
}

export default App;

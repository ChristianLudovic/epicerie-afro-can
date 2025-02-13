import FAQs from "./components/FAQs";
import Header from "./components/Header";
import ProductOverview from "./components/ProductsOverview";
import NavBar from "./components/basics/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ProductOverview />
      <FAQs />
    </>
  );
}

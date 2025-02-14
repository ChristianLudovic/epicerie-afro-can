import ContactSection from "./components/ContactSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
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
      <ContactSection />
      <Footer />
    </>
  );
}

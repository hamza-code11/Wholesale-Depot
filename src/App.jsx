import Navbar from './components/layout/Navbar';
import HeroSlider from './components/hero/HeroSlider';
import DeliveryBanner from './components/sections/DeliveryBanner';
import Categories from './components/sections/Categories';
import BrandCarousel from './components/sections/BrandCarousel';
import PromoBanner from './components/sections/PromoBanner';
import FeatureProduct from './components/sections/FeatureProduct';
import DealsOfDay from './components/sections/DealsOfDay';
import BrandShowcase from './components/sections/BrandShowcase';
import Features from './components/sections/Features';
import WhyShopWithUs from './components/sections/WhyShopWithUs';
import Newsletter from './components/sections/Newsletter';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="">
      <Navbar />
      <HeroSlider />
      <DeliveryBanner/>
      <BrandCarousel />
      <Categories />
      <DealsOfDay />
      <PromoBanner />
      <FeatureProduct />
      {/* <BrandShowcase /> */}
      {/* <Features /> */}
      <WhyShopWithUs />
      <Newsletter />
      <Footer />
    </div>
  );
}
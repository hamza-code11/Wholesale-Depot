import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/web_layout/Navbar';
import HeroSlider from '../../sections/HeroSlider';
import DeliveryBanner from '../../sections/DeliveryBanner';
import Categories from '../../sections/Categories';
import BrandCarousel from '../../sections/BrandCarousel';
import PromoBanner from '../../sections/PromoBanner';
import FeatureProduct from '../../sections/FeatureProduct';
import DealsOfDay from '../../sections/DealsOfDay';
import BrandShowcase from '../../sections/BrandShowcase';
import Features from '../../sections/Features';
import WhyShopWithUs from '../../sections/WhyShopWithUs';
import Newsletter from '../../sections/Newsletter';
import Footer from '../../components/web_layout/Footer';

 
export default function HomePage() {
   return (
     <>
       <HeroSlider />
       <DeliveryBanner />
       <BrandCarousel />
       <Categories />
       <DealsOfDay />
       <PromoBanner />
       <FeatureProduct />
       <WhyShopWithUs />
       <Newsletter />
     </>
   );
 }
 
 
 
 
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
    Heart,
    ShoppingCart,
    Minus,
    Plus,
    Star,
    Share2,
    Check,
    ChevronRight,
} from 'lucide-react';
import { productsData } from '../../data/productsData';
import RelatedProducts from '../../components/product/RelatedProducts';
import logo from '../../assets/logo/logo.png';
import ProductAccordion from '../../components/product/ProductAccordion'

export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const flavors = [
        { name: 'Original', size: '12 FL OZ (Pack of 12)', options: 6, price: 24.99 },
        { name: 'Strawberry', size: '12 FL OZ (Pack of 12)', options: 4, price: 27.99 },
        { name: 'Blueberry', size: '12 FL OZ (Pack of 12)', options: 5, price: 26.99 },
    ];
    const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);

    useEffect(() => {
        const found = productsData.find(p => p.id === parseInt(id)) || productsData[0];
        setProduct(found);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="w-10 h-10 border-2 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const productImages = [
        product.image,
        product.image?.replace('w=400', 'w=400&sat=-50'),
        product.image?.replace('w=400', 'w=400&blur=1'),
        product.image?.replace('w=400', 'w=400&sepia=20'),
        product.image?.replace('w=400', 'w=400&grayscale=50'),
    ];

    const {
        name = 'Product Name',
        price = 0,
        oldPrice,
        discount,
        rating = 4,
        reviews = 0,
        sold = 0,
        totalStock = 100,
        quantity: availableQty = 10,
        brand = 'Wholesale Depot',
        category = 'General',
    } = product;

    const remaining = totalStock - sold;
    const isLowStock = remaining <= 5 && remaining > 0;
    const relatedProducts = productsData.filter(p => p.id !== product.id).slice(0, 6);

    return (
        <div className="min-h-screen bg-white">


            {/* ===== MAIN CONTENT ===== */}
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">

                {/* 60/40 Layout */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                    {/* ===== LEFT: IMAGE GALLERY (60%) ===== */}
                    <div className="lg:w-[60%]">
                        <div className="flex gap-3 h-full lg:sticky lg:top-24">

                            {/* Thumbnails */}
                            <div className="grid grid-rows-5 gap-2 flex-shrink-0 h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px]">
                                {productImages.slice(0, 5).map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? 'border-brand-blue shadow-sm'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="flex-1 h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-xl overflow-hidden relative border border-gray-100">
                                {discount && (
                                    <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-lg shadow-md z-10">
                                        -{discount}% OFF
                                    </span>
                                )}
                                <img
                                    src={productImages[selectedImage]}
                                    alt={name}
                                    className="w-full h-full object-contain p-4 sm:p-6"
                                />
                            </div>

                        </div>
                    </div>

                    {/* ===== RIGHT: PRODUCT INFO (40%) ===== */}
                    <div className="lg:w-[40%] flex flex-col">

                        {/* Brand + Category (Left) + Wishlist (Right) */}
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Link to="/shop" className="text-[11px] sm:text-xs font-semibold text-brand-blue hover:underline">
                                    Brand NAme
                                </Link>
                                <ChevronRight size={12} className="text-gray-300" />
                                <span className="text-[11px] sm:text-xs text-gray-500">Category Name</span>
                            </div>

                            {/* Wishlist - Red Outline Heart */}
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="p-1 transition-all hover:scale-110"
                            >
                                <Heart
                                    size={20}
                                    className={`transition-all ${isWishlisted
                                        ? 'fill-brand-red text-brand-red'
                                        : 'text-brand-red'
                                        }`}
                                    strokeWidth={2}
                                />
                            </button>
                        </div>

                        {/* Product Name */}
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 leading-snug">
                            {name}
                        </h1>

                        {/* Rating */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={13}
                                        fill={i < Math.floor(rating) ? "#F59E0B" : "none"}
                                        className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-200"}
                                    />
                                ))}
                            </div>
                            <span className="text-[11px] sm:text-sm font-bold text-gray-700">{rating}</span>
                            <span className="text-[10px] sm:text-xs text-gray-400">({reviews} ratings)</span>
                            <span className="hidden sm:inline text-gray-300">|</span>
                            <span className="text-[10px] sm:text-xs text-brand-red font-medium">{sold}+ sold</span>
                        </div>

                        {/* ===== FLAVOR SELECTOR ===== */}
                        <div className="mb-2 sm:mb-5">
                            <span className="text-[11px] sm:text-sm font-bold text-gray-700 block mb-2">
                                Flavor: <span className="text-brand-blue font-medium">{selectedFlavor.name}</span>
                            </span>

                            <div className="flex gap-2">
                                {flavors.map((flavor) => (
                                    <button
                                        key={flavor.name}
                                        onClick={() => setSelectedFlavor(flavor)}
                                        className={`flex-1 text-left px-3 py-2 border-2 transition-all ${selectedFlavor.name === flavor.name
                                            ? 'border-brand-blue bg-brand-blue/5'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <p className={`text-[12px] sm:text-[13px] font-extrabold leading-tight mb-0.5 ${selectedFlavor.name === flavor.name ? 'text-brand-blue' : 'text-gray-700'
                                            }`}>
                                            {flavor.name}
                                        </p>
                                        <p className="text-[10px] text-gray-500 leading-tight">{flavor.size}</p>
                                        <p className="text-[9px] text-gray-400 leading-tight">{flavor.options} options from</p>
                                        <p className={`text-sm font-extrabold leading-tight mt-0.5 ${selectedFlavor.name === flavor.name ? 'text-brand-blue' : 'text-gray-900'
                                            }`}>
                                            ${flavor.price}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-100 my-1 sm:my-1" />

                        {/* Price Section - Dynamic from selectedFlavor */}
                        <div className="mb-3 sm:mb-4">
                            <div className="flex items-baseline gap-2 flex-wrap">
                                <span className="text-sm sm:text-lg text-gray-400 line-through">
                                    ${(selectedFlavor.price * 1.5).toFixed(2)}
                                </span>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-blue">
                                    ${selectedFlavor.price}
                                </span>
                                <span className="text-[10px] sm:text-xs font-bold text-brand-red bg-red-50 px-2 py-0.5 rounded-full">
                                    Save ${((selectedFlavor.price * 1.5) - selectedFlavor.price).toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Stock Status */}
                        <div className="mb-3 sm:mb-4">
                            {remaining > 0 ? (
                                <span className="text-[11px] sm:text-sm font-bold text-green-600 flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    In Stock ({remaining} available)
                                </span>
                            ) : (
                                <span className="text-[11px] sm:text-sm font-bold text-brand-red">Out of Stock</span>
                            )}
                            {isLowStock && (
                                <span className="text-[10px] sm:text-xs text-orange-600 font-medium bg-orange-50 px-2 py-0.5 rounded-full ml-2">
                                    Only {remaining} left
                                </span>
                            )}
                        </div>

                        {/* Quantity + Add to Cart - Same Line */}
                        <div className="flex items-stretch gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className="flex items-center border-2 border-gray-200 overflow-hidden flex-shrink-0">
                                <button
                                    onClick={() => quantity > 1 && setQuantity(prev => prev - 1)}
                                    disabled={quantity <= 1}
                                    className="px-2.5 sm:px-3 py-2.5 sm:py-3 text-gray-400 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-30"
                                >
                                    <Minus size={13} />
                                </button>
                                <span className="px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-sm font-bold border-x-2 border-gray-200 bg-gray-50 min-w-[45px] text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => quantity < availableQty && setQuantity(prev => prev + 1)}
                                    disabled={quantity >= availableQty}
                                    className="px-2.5 sm:px-3 py-2.5 sm:py-3 text-gray-400 hover:text-brand-blue hover:bg-gray-50 transition-colors disabled:opacity-30"
                                >
                                    <Plus size={13} />
                                </button>
                            </div>

                            {/* Add to Cart - Outline with Hover Fill */}
                            <button
                                onClick={() => {
                                    setIsAddedToCart(true);
                                    setTimeout(() => setIsAddedToCart(false), 2000);
                                }}
                                disabled={availableQty === 0}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 text-[11px] sm:text-sm font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-2 ${isAddedToCart
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : 'border-brand-red text-brand-red bg-transparent hover:bg-brand-red hover:text-white'
                                    }`}
                            >
                                {isAddedToCart ? (
                                    <>
                                        <Check size={16} /> Added to Cart
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart size={16} /> Add to Cart
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Buy Now - Full Width No Radius */}
                        <button className="w-full py-2.5 sm:py-3 text-[11px] sm:text-sm font-bold bg-brand-blue hover:bg-brand-blue-dark text-white transition-all shadow-md hover:shadow-lg">
                            Buy Now
                        </button>

                        {/* ===== PRODUCT ACCORDION ===== */}
                        <div className="mt-4 sm:mt-5">
                            <ProductAccordion />
                        </div>

                    </div>

                </div>

                {/* ===== RELATED PRODUCTS ===== */}
                <RelatedProducts products={relatedProducts} />

            </div>
        </div>
    );
}
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const accordionData = [
    {
        id: 1,
        title: 'Top Highlights',
        type: 'highlight',
        content: {
            'Flavor': 'Gluten Free Low Carb White',
            'Brand': 'CARBONAUT',
            'Item Weight': '550 Grams',
            'Specialty': 'Gluten Free',
            'Number of Pieces': '4',
        },
        description: `EXPANDING THE LOW-CARB & GLUTEN-FREE UNIVERSE: We couldn't find an appealing gluten-free bread / low-carb bread. So we made one. With Carbonaut seed bread, you can enjoy gluten free, keto-friendly sandwiches that keep your taste buds happy and your body healthy.

WHERE NO GLUTEN-FREE BREAD HAS GONE BEFORE: We're on a mission to bring you the first (and only) keto and gluten free bread that is downright delightful.

FAT-BURNING MODE: Carbonaut's low-carb seeded bread has only 1g of net carbs per slice, helping your body stay in fat-burning mode.

BAKERY-QUALITY BREAD: You didn't know keto bread could taste this good. You shouldn't have to sacrifice taste for keto food eating.

ALWAYS PLANT-BASED AND DELICIOUS: Plant-based eating is a core value for us. You won't find any animal products in our gluten free bread.

EASY TO STORE: This gluten free bread is packed from the freezer and thaws on its way to you. Put the loaves you don't plan on eating soon back in the freezer for up to 6 months.`,
        defaultOpen: false,
    },
    {
        id: 2,
        title: 'Item Details',
        type: 'details',
        content: {
            'Flavor': 'Gluten Free Low Carb White',
            'Brand Name': 'CARBONAUT',
            'Specialty': 'Gluten Free',
            'Diet Type': 'Gluten Free, Keto, Vegan',
            'Item Form': 'Loaf',
            'GTIN': '20696685200046',
            'Unit Count': '16.0 Ounce',
            'Manufacturer': 'Carbonaut',
            'Container Type': 'Bag',
            'Cuisine': 'Western',
            'Best Sellers Rank': '#28,462 in Grocery & Gourmet Food',
            'ASIN': 'B09B4HHVLD',
            'Customer Reviews': '3.8 out of 5 stars (595)',
        },
        defaultOpen: false,
    },
];

export default function ProductAccordion({ data = accordionData }) {
    const [openItems, setOpenItems] = useState(
        data.reduce((acc, item) => ({
            ...acc,
            [item.id]: item.defaultOpen || false,
        }), {})
    );

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="flex flex-col">
            {data.map((item) => (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                    {/* Header */}
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between py-3 sm:py-3.5 text-left transition-all"
                    >
                        <span className="text-[11px] sm:text-sm font-bold text-gray-700">
                            {item.title}
                        </span>
                        {openItems[item.id] ? (
                            <ChevronUp size={14} className="text-gray-400 flex-shrink-0" />
                        ) : (
                            <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
                        )}
                    </button>

                    {/* Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${openItems[item.id] ? 'max-h-[3000px] pb-3 sm:pb-4' : 'max-h-0'
                        }`}>

                        {/* Table Rows */}
                        <div className="text-[10px] sm:text-xs">
                            {Object.entries(item.content).map(([label, value], i) => (
                                <div
                                    key={i}
                                    className={`flex justify-between py-1.5 sm:py-2 ${i !== Object.keys(item.content).length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                >
                                    <span className="font-bold text-gray-800 flex-shrink-0 mr-4">{label}</span>
                                    <span className="text-gray-500 text-right">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Description for Highlights */}
                        {item.description && (
                            <div className="mt-3 pt-3 border-t border-gray-200">
                                <p className="font-extrabold text-gray-800 text-[11px] sm:text-xs mb-2">About this item:</p>
                                <div className="text-[11px] sm:text-[11px] text-gray-500 leading-relaxed whitespace-pre-line">
                                    {item.description}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
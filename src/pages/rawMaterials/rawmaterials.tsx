import React, { useState } from "react";
import ConstructionComponent from "../../components/rawMaterials/construction";
import InteriorComponent from "../../components/rawMaterials/interior";
import RawMaterialHeader from "../../components/rawMaterials/rawMaterialHeader";
import FilterModal from "../../components/rawMaterials/filterModal";
import CartModal from "../../components/rawMaterials/cartModal";
import { useRecoilValue } from "recoil";
import { cartItemState } from "../../store/rawMaterailState/cartItemState";
import { product } from "../../store/rawMaterailState/productState";
import { interiorProducts } from "../../common/interiorProducts";
import { constructionProducts } from "../../common/constructionProducts";

const RawMaterials: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'construction' | 'interior'>('construction');
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<product[]>([]);
    const cartItems = useRecoilValue(cartItemState);

    // Filter modal open/close functions
    const openFilterModal = () => setIsOpen(true);
    const closeFilterModal = (selectedFilters: { categories: string[]; priceRange: string[] }) => {
        setIsOpen(false);

        // Determine the products to filter based on the selected tab
        const productsToFilter = selectedTab === 'construction' ? constructionProducts : interiorProducts;

        const filtered = productsToFilter.filter((product) => {
            const inCategory = selectedFilters.categories.length === 0 || selectedFilters.categories.includes(product.category);
            const inPriceRange = selectedFilters.priceRange.length === 0 || selectedFilters.priceRange.some(range => {
                const [min, max] = range.split(' - ').map(Number);
                return Number(product.price) >= min && Number(product.price) <= max;
            });

            return inCategory && inPriceRange;
        });

        setFilteredProducts(filtered);
    };

    // Cart modal open/close functions
    const openCartModal = () => setIsCartOpen(true);
    const closeCartModal = () => setIsCartOpen(false);

    // Tab selection handler
    const handleSelectTab = (tab: 'construction' | 'interior') => {
        setSelectedTab(tab);

        // Reset filtered products when switching tabs
        setFilteredProducts([]);
    };

    return (
        <div>
            <RawMaterialHeader 
                onOpenFilterModal={openFilterModal} 
                onOpenCartModal={openCartModal} 
                onSelectTab={handleSelectTab} 
                selectedTab={selectedTab}
            />

            {/* Conditionally render components based on selected tab */}
            {selectedTab === 'construction' && <ConstructionComponent products={filteredProducts.length ? filteredProducts : constructionProducts} />}
            {selectedTab === 'interior' && <InteriorComponent products={filteredProducts.length ? filteredProducts : interiorProducts} />}

            {/* Modals */}
            <FilterModal isOpen={isOpen} onClose={closeFilterModal} products={selectedTab === 'construction' ? constructionProducts : interiorProducts} />
            <CartModal isOpen={isCartOpen} onClose={closeCartModal} cartItems={cartItems} />
        </div>
    );
};

export default RawMaterials;

import React from 'react';
import { useRecoilValue } from 'recoil';
import CommentsList from '../../components/comments/commentsList';
import ProductionHeader from '../../components/production/productionHeader';
import FactoriesList from '../../components/production/FactoriesList';
import { selectedCategoryState } from '../../store/selectCatagoryState';




const ProductionPage: React.FC = () => {
    const selectedCategory = useRecoilValue(selectedCategoryState);
    

    let renderComponent;
    switch (selectedCategory) {
        case 'Factories':
            renderComponent = <FactoriesList />;
            break;
        case 'False ceiling':
            renderComponent = null;
            break;
        case 'Painting':
            renderComponent = null;
            break;
        case 'Loose Furniture':
            renderComponent = null;
            break;
        default:
            renderComponent = null;
    }

    return (
        <>
            <ProductionHeader renderComponent={renderComponent} />
            {/* Render component for larger screens only */}
            <div className="md:flex gap-3 flex-col md:flex-row">
                <div className="w-[65%] hidden md:block">
                    {renderComponent}
                </div>
                <div className="md:w-[35%]">
                    <CommentsList />
                </div>
            </div>
        </>
    );
};

export default ProductionPage;

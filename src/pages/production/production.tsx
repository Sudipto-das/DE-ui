import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import CommentsList from '../../components/comments/commentsList';
import ProductionHeader from '../../components/production/productionHeader';
import { selectedCategoryState } from '../../store/selectCatagoryState';
import DetailsPage from '../../components/production/DetailsPage';
import FactoriesComponent from '../../components/production/Factories/FectoriesComponent';
import FalseCeilingComponent from '../../components/production/FalseCeiling/FalseCeilingComponent';




const ProductionPage: React.FC = () => {
    const [selectedCategory, setSelectedCatagory] = useRecoilState(selectedCategoryState);
    useEffect(()=>{
        setSelectedCatagory('Factories')
    },[])

    let renderComponent;
    switch (selectedCategory) {
        case 'Factories':
            renderComponent = <FactoriesComponent/>;
            break;
        case 'False ceiling':
            renderComponent = <FalseCeilingComponent/>;
            break;
        case 'Painting':
            renderComponent = null;
            break;
        case 'Loose Furniture':
            renderComponent = null;
            break;
        case 'book-button':
            renderComponent = <DetailsPage />;
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

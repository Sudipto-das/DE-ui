import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import CommentsList from '../../components/comments/commentsList';
import ProductionHeader from '../../components/production/productionHeader';
import { selectedCategoryState } from '../../store/selectCatagoryState';
import DetailsPage from '../../components/production/DetailsPage';
import FactoriesComponent from '../../components/production/Factories/FectoriesComponent';
import FalseCeilingComponent from '../../components/production/FalseCeiling/FalseCeilingComponent';
import PaintingComponent from '../../components/production/Painting/painting';
import { HiOutlineChatAlt2 } from 'react-icons/hi'; // Importing a chat icon


const ProductionPage: React.FC = () => {
    const [selectedCategory, setSelectedCatagory] = useRecoilState(selectedCategoryState);
    const [isCommentsVisible, setCommentsVisible] = useState(false); // State to control comments visibility on small devices

    useEffect(() => {
        setSelectedCatagory('Execution');
    }, [setSelectedCatagory]);

    let renderComponent;
    switch (selectedCategory) {
        case 'Execution':
            renderComponent = <FactoriesComponent />;
            break;
        case 'False ceiling':
            renderComponent = <FalseCeilingComponent />;
            break;
        case 'Painting':
            renderComponent = <PaintingComponent />;
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
            
            {/* Render component and comments */}
            <div className="md:flex gap-3 flex-col md:flex-row">
                {/* Content area for larger screens */}
                <div className="w-[65%] hidden md:block">
                    {renderComponent}
                </div>

                {/* Comments section for larger screens */}
                <div className="md:w-[35%] hidden md:block">
                    <CommentsList />
                </div>
            </div>

            {/* Message icon for small screens */}
            <div className="fixed bottom-5 right-5 md:hidden">
                <button
                    className="bg-green-500 p-3 rounded-full text-white shadow-lg focus:outline-none"
                    onClick={() => setCommentsVisible(!isCommentsVisible)}
                >
                    <HiOutlineChatAlt2 className="h-6 w-6" />
                </button>
            </div>

            {/* Conditionally render the CommentsList when icon is clicked on small devices */}
            {isCommentsVisible && (
                <div className="fixed inset-0 z-50 bg-white p-4">
                    <button
                        className="text-gray-500 text-lg mb-4"
                        onClick={() => setCommentsVisible(false)}
                    >
                        Close
                    </button>
                    <CommentsList />
                </div>
            )}
        </>
    );
};

export default ProductionPage;

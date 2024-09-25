import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartItemState } from "../../../store/rawMaterailState/cartItemState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addressFormState } from "../../../store/addressFormData";
import { invoiceFinaceState } from "../../../store/invoiceFinanceState";

const OrderSummary = () => {
    const navigate = useNavigate();
    const formData = useRecoilValue(addressFormState);

    const cartItems = useRecoilValue(cartItemState);
    const setInvoiceFinance = useSetRecoilState(invoiceFinaceState);
    const [showAddressPopup, setShowAddressPopup] = useState(false);

    const invoiceClick = () => {
        if (formData.id != 0) {
            // If address form data exists, navigate to finance page
            setInvoiceFinance(true);
            navigate('/finance-your-project');
        } else {
            // If no address is available, show the popup
            setShowAddressPopup(true);
        }
    };

    return (
        <div className="border rounded-lg p-5">
            <div className="bg-slate-100 p-2 rounded-sm text-center">Order Summary</div>
            <div className="overflow-y-auto max-h-[35rem] mt-3 mb-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h2>
                            <p className="text-gray-600 mb-3">{item.description}</p>
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-semibold text-gray-800">Price: ${item.price}</p>
                                <p className="text-lg font-semibold text-gray-800">Qty: {item.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-3">
            <button className="px-5 py-2 border rounded-md bg-green-500 text-white font-semibold">Add More Items</button>

                <button
                    className="px-4 py-2 border rounded-md text-white font-semibold bg-gradient-to-r from-violet-700 to-pink-500"
                    onClick={invoiceClick}
                >
                    Invoice Finance
                </button>
            </div>

            {/* Address popup */}
            {showAddressPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Address Required</h2>
                        <p className="mb-4">Please select or add your address to proceed with Invoice Finance.</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md"
                            onClick={() => setShowAddressPopup(false)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;
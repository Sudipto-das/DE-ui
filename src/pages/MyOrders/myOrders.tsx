
const MyOrders = () => {
    const orders = [
        {
            id: '123456',
            date: '2024-08-31',
            status: 'Delivered',
            total: '$150.00',
            products: [
                {
                    name: 'Product 1',
                    image: 'https://via.placeholder.com/80',
                    price: '$50.00',
                },
             
            ],
        },
        {
            id: '789012',
            date: '2024-08-29',
            status: 'Shipped',
            total: '$89.99',
            products: [
                {
                    name: 'Product 3',
                    image: 'https://via.placeholder.com/80',
                    price: '$89.99',
                },
            ],
        },
        {
            id: '345678',
            date: '2024-08-25',
            status: 'Processing',
            total: '$45.00',
            products: [
                {
                    name: 'Product 4',
                    image: 'https://via.placeholder.com/80',
                    price: '$45.00',
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">My Orders</h1>
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order.id} className="p-6 bg-gray-50 rounded-lg shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-700">Order ID: {order.id}</h2>
                                    <p className="text-gray-500">Date: {order.date}</p>
                                    <p className="text-gray-500">Status: 
                                        <span className={`ml-1 font-medium ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Shipped' ? 'text-blue-600' : 'text-yellow-600'}`}>
                                            {order.status}
                                        </span>
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold text-gray-800">{order.total}</p>
                                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-4">
                                {order.products.map((product, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-cover shadow-sm" />
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
                                            <p className="text-gray-500">{product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;

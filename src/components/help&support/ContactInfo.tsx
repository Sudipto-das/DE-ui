import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="md:w-[40%] mt-5 p-5 mx-auto max-w-md ">
            <h2 className="text-4xl font-medium mb-6 text-slate-600">Contact Us</h2>
            <p className="mb-6 text-sm 2xl:text-md">
                At Design Elementary, we're here to help you elevate your digital presence. Whether you have questions, need a consultation, or want to discuss your project, our team is ready to assist you.
            </p>
            <p className="text-green-500 font-medium mb-4">Customer Support</p>
            <div className="space-y-4">
                <div className="flex items-center mb-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-300 rounded-full mr-3">
                        <img src="phone.png" alt="Phone" className="w-5 h-5" />
                    </div>
                    <span className="2xl:text-md">+1-607-318-1576</span>
                </div>
                <div className="flex items-center mb-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-300 rounded-full mr-3">
                        <img src="email.png" alt="Email" className="w-5 h-5" />
                    </div>
                    <span className="2xl:text-md">care@designelementary.com</span>
                </div>
                <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-300 rounded-full mr-3">
                        <img src="location.png" alt="Location" className="w-5 h-5" />
                    </div>
                    <span className="2xl:text-md">789 Innovation Dr, San Francisco, CA</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

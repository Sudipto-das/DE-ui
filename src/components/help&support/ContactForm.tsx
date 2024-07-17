import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="w-full 2xl:w-1/2 border p-4 md:p-8 rounded-lg bg-white shadow-lg">
            <h3 className="text-xl md:text-2xl font-medium mb-4 text-green-900">Get in Touch</h3>
            <form className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1 text-sm md:text-base">Your Name</label>
                    <input id="name" type="text" className="p-2 border rounded text-sm md:text-base" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="company" className="mb-1 text-sm md:text-base">Company Name (Optional)</label>
                    <input id="company" type="text" className="p-2 border rounded text-sm md:text-base" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm md:text-base">Email Address</label>
                    <input id="email" type="email" className="p-2 border rounded text-sm md:text-base" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="phone" className="mb-1 text-sm md:text-base">Phone Number</label>
                    <div className="flex">
                        <input type="text" className="w-16 p-2 border rounded-l text-sm md:text-base" defaultValue="+91" />
                        <input id="phone" type="text" className="p-2 border rounded-r flex-grow text-sm md:text-base" />
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 flex flex-col">
                    <label htmlFor="message" className="mb-1 text-sm md:text-base">Leave us a short message</label>
                    <textarea id="message" className="p-2 border rounded h-24 text-sm md:text-base"></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="w-full p-3 bg-green-900 rounded text-white text-sm md:text-base font-bold">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

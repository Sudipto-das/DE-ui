import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';

const HelpAndSupport: React.FC = () => {
    return (
        <div className=" bg-white md:p-2 ">
            <ContactHeader/>
            <div className="container mx-auto bg-gradient-to-r from-green-200 to-white rounded-lg md:p-10 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-10">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default HelpAndSupport;

import React from 'react';
import ContactHeader from '../../components/help&support/ContactHeader';

const HelpAndSupport: React.FC = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center gap-28 border rounded-lg" style={{ height: 'calc(94vh - 88px)' }}>
            <h1 className="text-3xl font-bold mt-4 text-slate-500">Help & Support</h1>
            <div className="flex justify-center" style={{ height: '100%', width: '100%' }}>
                <ContactHeader />
            </div>
        </div>
    );
};

export default HelpAndSupport;

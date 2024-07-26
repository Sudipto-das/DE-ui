import { useState, useEffect } from 'react';

const ContactHeader = () => {
    const [copied, setCopied] = useState(false);
    const [whatsAppLink, setWhatsAppLink] = useState('');
    const YOUR_PHONE_NUMBER = '+91 88674 30197'

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            setWhatsAppLink(`whatsapp://send?phone=${YOUR_PHONE_NUMBER}`);
        } else {
            setWhatsAppLink(`https://web.whatsapp.com/send?phone=${YOUR_PHONE_NUMBER}`);
        }
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('care@designelementary.com');
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="w-full bg-white mb-4 p-4">
            <div className="flex flex-wrap justify-center md:space-x-8 space-y-4 md:space-y-0 md:flex-row flex-col items-center">
                <a 
                    href={whatsAppLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full md:w-auto flex-grow flex flex-col items-center space-y-4 p-4 bg-gradient-to-tr from-blue-100 to-violet-500 rounded-lg shadow-md max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105"
                >
                    <img src="logo.png" alt="WhatsApp" className="w-16 h-16"/>
                    <span className="text-md md:text-xl text-slate-600 font-semibold">WhatsApp</span>
                </a>
                <div className="w-full md:w-auto flex-grow flex flex-col items-center space-y-4 p-4 bg-gradient-to-tr from-blue-200 to-violet-500 rounded-lg shadow-md max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105 relative">
                    <a 
                        href="mailto:care@designelementary.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-col items-center space-y-4 w-full"
                    >
                        <img src="email.png" alt="Email" className="w-16 h-16"/>
                        <span className="text-md md:text-xl text-slate-600 font-semibold">Email</span>
                    </a>
                    <div className="text-sm text-slate-600 font-semibold mt-2 md:mt-0 md:absolute md:bottom-0 md:translate-y-full flex items-center space-x-2">
                        <span>care@designelementary.com</span>
                        <button onClick={copyToClipboard} className="p-1 rounded hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/></svg>
                        </button>
                    </div>
                    {copied && <span className="text-green-600 text-sm mt-2 absolute bottom-0 right-3 translate-y-full">Copied!</span>}
                </div>
                <a 
                    href="#" 
                    className="w-full md:w-auto flex-grow flex flex-col items-center space-y-4 p-4 bg-gradient-to-tr from-blue-200 to-violet-600 rounded-lg shadow-md max-w-xs md:max-w-sm transform transition-transform duration-300 hover:scale-105"
                >
                    <img src="chat.png" alt="Chat" className="w-16 h-16"/>
                    <span className="text-md md:text-xl text-slate-600 font-semibold">Chat</span>
                </a>
            </div>
        </div>
    );
}

export default ContactHeader;

const ContactHeader = () => {
    return (
        <div className="w-full bg-white mb-4">
            <div className="flex flex-wrap justify-center md:space-x-8 space-y-4 md:space-y-0 md:flex-row flex-col">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="flex-grow flex flex-col items-center space-y-4 p-4 bg-yellow-100 rounded-lg shadow-md max-w-xs md:max-w-sm">
                    <img src="logo.png" alt="WhatsApp" className="w-16 h-16"/>
                    <span className="text-md md:text-xl text-slate-600 font-semibold">WhatsApp</span>
                </a>
                <a href="mailto:care@designelementary.com" target="_blank" rel="noopener noreferrer" className="flex-grow flex flex-col items-center space-y-4 p-4 bg-yellow-100 rounded-lg shadow-md max-w-xs md:max-w-sm">
                    <img src="email.png" alt="Email" className="w-16 h-16"/>
                    <span className="text-md md:text-xl text-slate-600 font-semibold">Email</span>
                </a>
                <div className="flex-grow flex flex-col items-center space-y-4 p-4 bg-yellow-100 rounded-lg shadow-md max-w-xs md:max-w-sm">
                    <img src="chat.png" alt="Chat" className="w-16 h-16"/>
                    <span className="text-md md:text-xl text-slate-600 font-semibold">Chat</span>
                </div>
            </div>
        </div>
    );
}

export default ContactHeader;

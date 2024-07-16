const ContactHeader = () => {
    return (
        <div className="w-full bg-white  mb-4">
            <div className="text-4xl text-center mb-5 font-semibold text-slate-400">Help & Support</div>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
                <div className="flex-grow flex flex-col items-center space-y-4 p-4 bg-green-50 rounded-lg shadow-md max-w-xs md:max-w-sm">
                    <img src="logo.png" alt="WhatsApp" className="w-14 h-14"/>
                    <span className="text-md md:text-xl text-slate-600">WhatsApp</span>
                </div>
                <div className="flex-grow flex flex-col items-center space-y-4 p-4 bg-green-50 rounded-lg shadow-md max-w-xs md:max-w-sm">
                    <img src="gmail.png" alt="Email" className="w-14 h-14"/>
                    <span className=" text-md md:text-xl text-slate-600">Email</span>
                </div>
                <div className="flex-grow flex flex-col items-center space-y-4 p-4 bg-green-50 rounded-lg shadow-md max-w-xs md:max-w-sm">
                    <img src="chat.png" alt="Chat" className="w-14 h-14"/>
                    <span className="text-md md:text-xl text-slate-600">Chat</span>
                </div>
            </div>
        </div>
    );
}

export default ContactHeader;

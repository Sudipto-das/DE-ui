import React from 'react';

const CommentInput: React.FC = () => {
    return (
        <div className="flex items-center border-t p-4 gap-2 justify-center">
            <img src="Frame 476.png" alt="" className='w-5 h-5'/>
            <div className='border rounded-lg px-2 py-1 2xl:flex justify-between flex-grow'>
                <input
                    type="text"
                    placeholder="Type message here"
                    className="flex-grow p-2 border-none rounded-lg mr-4 focus:outline-none "
                />
                <button className="bg-[#E6E8EC] text-[#23262F] px-4 py-2 rounded-lg hover:none">Send</button>
            </div>
        </div>
    );
};

export default CommentInput;

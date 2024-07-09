import Rating from "../../common/rating";

const UserProfile = () => {
    const user = {
        name: 'Nguyen Duy Phuoc',
        designation: 'Designer',
        rating: 4,
        status: 'Premium'
    };

    return (
        <div className='bg-[#F4F5F6] m-4 rounded-md'>
            <div className="pl-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 flex-grow">
                    <img
                        src="Avatar.png"
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full mb-2"
                    />
                    <div className='flex flex-col'>
                        <span className="font-medium text-sm">{user.name}</span>
                        <span className="text-gray-500 text-xs">{user.designation}</span>
                        <div className="mt-2"><Rating rating={user.rating} /></div>
                    </div>
                </div>
                <div className=" -rotate-90">
                    <span className={`block ${user.status === 'Premium' ? 'text-green-700 font-bold' : 'text-gray-500'}`}>
                        {user.status}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;

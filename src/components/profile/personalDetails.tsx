
interface PersonalDetailsProps {
    name: string,
    role: string,
    location: string,
    category: "Premium" | "Standard" | "Ultimate"
}
const PersonalDetails: React.FC<PersonalDetailsProps> = ({ name, role, location, category }) => {
    const badgeColors: Record<PersonalDetailsProps['category'], string> = {
        Premium: 'bg-green-500',
        Standard: 'bg-yellow-500',
        Ultimate: 'bg-orange-500',
    };

    return <div>
        <h2 className="text-xl font-semibold mb-4 font-inter">My Profile</h2>

        <div className="flex items-center mb-6 p-4 border rounded-lg">
            <img
                src="/Avatar.png"
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
            />
            <div className='w-full md:flex justify-between items-center'>
                <div>
                    <div className="flex gap-3 items-center">
                        <h3 className="text-lg font-bold font-inter">{name}</h3>
                        <div className={`${badgeColors[category]} text-white text-xs font-semibold px-2 py-1 text-center `}><h1>{category.toUpperCase()}</h1></div>
                    </div>
                    <p className="text-gray-600 font-inter">{role}</p>
                    <p className="text-gray-600 font-inter">{location}</p>
                </div>
            </div>

        </div>

    </div>
}
export default PersonalDetails
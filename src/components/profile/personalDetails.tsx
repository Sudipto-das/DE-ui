
interface PersonalDetailsProps{
    name:string,
    role:string,
    location:string
}
const PersonalDetails: React.FC<PersonalDetailsProps> = ({name,role,location}) => {

    return <div>
        <h2 className="text-xl font-semibold mb-4">My Profile</h2>

        <div className="flex items-center mb-6 p-4 border rounded-lg">
            <img
                src="/Avatar.png"
                alt="Profile"
                className="w-16 h-16 rounded-full mr-4"
            />
            <div className='w-full md:flex justify-between items-center'>
                <div>
                    
                       
                            <h3 className="text-lg font-bold">{name}</h3>
                            <p className="text-gray-600">{role}</p>
                            <p className="text-gray-600">{location}</p>
                        
                   
                </div>
                
            </div>
        </div>
    </div>
}
export default PersonalDetails
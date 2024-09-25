import { useState } from "react";
import EditButton from "../ui/editButton"
interface PersonalInformationProps {
    name: string
    email: string;
    phone: string;
    bio: string

}
const PersonalInformation: React.FC<PersonalInformationProps> = ({
    name,
    email,
    phone,
    
}) => {
    const [isEditing, setIsEditing] = useState(false);


    const toggleEdit = () => setIsEditing(!isEditing);

    const saveChanges = () => {
        setIsEditing(false);
        // Handle save logic here
    };
    return (
        <div className="mb-6 p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold font-inter">Personal information</h3>
                <EditButton isEditing={isEditing} onClick={isEditing ? saveChanges : toggleEdit} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="text-sm text-gray-500">First Name</p>
                    {isEditing ? (
                        <input
                            type="text"
                            className="block w-full p-2 border rounded"
                            value={name.split(' ')[0]}

                        />
                    ) : (
                        <p className="font-medium">{name.split(' ')[0]}</p>
                    )}
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-inter">Last Name</p>
                    {isEditing ? (
                        <input
                            type="text"
                            className="block w-full p-2 border rounded"
                            value={name.split(' ')[1]}

                        />
                    ) : (
                        <p className="font-medium font-inter">{name.split(' ')[1]}</p>
                    )}
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-inter">Email address</p>
                    {isEditing ? (
                        <input
                            type="email"
                            className="block w-full p-2 border rounded"
                            value={email}

                        />
                    ) : (
                        <p className="font-medium font-inter">{email}</p>
                    )}
                </div>
                <div>
                    <p className="text-sm text-gray-500 font-inter">Phone</p>
                    {isEditing ? (
                        <input
                            type="tel"
                            className="block w-full p-2 border rounded"
                            value={phone}

                        />
                    ) : (
                        <p className="font-medium font-inter">{phone}</p>
                    )}
                </div>
               
            </div>
        </div>
    )
}
export default PersonalInformation
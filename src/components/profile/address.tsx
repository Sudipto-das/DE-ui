import { useState } from "react";
import EditButton from "../ui/editButton";

interface AddressProps {
   
    country: string;
    state: string;
    postalCode: string;
    taxId: string;
}

const Address: React.FC<AddressProps> = ({
   
    country,
    state,
    postalCode,
    taxId
}) => {
    const [isEditing, setIsEditing] = useState(false);


    const toggleEdit = () => setIsEditing(!isEditing);

    const saveChanges = () => {
        setIsEditing(false);
        // Handle save logic here
    };
    return (
        <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">Address</h3>
                    <EditButton isEditing={isEditing} onClick={isEditing ? saveChanges : toggleEdit} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Country</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={country}

                            />
                        ) : (
                            <p className="font-medium">{country}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">City/State</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={state}

                            />
                        ) : (
                            <p className="font-medium">{state}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Postal Code</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={postalCode}

                            />
                        ) : (
                            <p className="font-medium">{postalCode}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">TAX ID</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={taxId}

                            />
                        ) : (
                            <p className="font-medium">{taxId}</p>
                        )}
                    </div>
                </div>
            </div>
    )
}
export default Address
import { useState } from "react";
import EditButton from "../ui/editButton";
import { useRecoilValue } from "recoil";
import { AddressState } from "../../store/profileState/AddressState";



const Address: React.FC= () => {
    const address = useRecoilValue(AddressState)
    const [isEditing, setIsEditing] = useState(false);


    const toggleEdit = () => setIsEditing(!isEditing);

    const saveChanges = () => {
        setIsEditing(false);
        // Handle save logic here
    };
    return (
        <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold font-inter">Address</h3>
                    <EditButton isEditing={isEditing} onClick={isEditing ? saveChanges : toggleEdit} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500 font-inter">Country</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={address?.Country || 'NA'}

                            />
                        ) : (
                            <p className="font-medium font-inter">{address?.Country || 'NA'}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-inter">City/State</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={`${address?.City || ''}, ${address?.State || 'NA'}`}

                            />
                        ) : (
                            <p className="font-medium font-inter">{`${address?.City || 'NA'}, ${address?.State || 'NA'}`}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-inter">Postal Code</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={address?.ZipCode||'NA'}

                            />
                        ) : (
                            <p className="font-medium font-inter">{address?.ZipCode||'NA'}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-inter">District</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={address?.City || 'NA'}

                            />
                        ) : (
                            <p className="font-medium font-inter">{address?.District || 'NA'}</p>
                        )}
                    </div>
                </div>
            </div>
    )
}
export default Address
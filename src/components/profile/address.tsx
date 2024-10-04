import { useState } from "react";
import EditButton from "../ui/editButton";
import { useRecoilValue } from "recoil";
import { profileDataState } from "../../store/profileState/userProfileState";




const Address: React.FC= () => {
    const profileData = useRecoilValue(profileDataState);
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <p className="text-sm text-gray-500 font-inter">Country</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={profileData.user?.address[0]?.Country || 'NA'}

                            />
                        ) : (
                            <p className="font-medium font-inter">{profileData.user?.address[0]?.Country || 'NA'}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-inter">City/State</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={`${profileData.user?.address[0].City || ''}, ${profileData.user?.address[0]?.State || 'NA'}`}

                            />
                        ) : (
                            <p className="font-medium font-inter">{`${profileData.user?.address[0]?.City || 'NA'}, ${profileData.user?.address[0]?.State|| 'NA'}`}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-inter">Postal Code</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={profileData.user?.address[0].ZipCode||'NA'}

                            />
                        ) : (
                            <p className="font-medium font-inter">{profileData.user?.address[0]?.ZipCode||'NA'}</p>
                        )}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-inter">District</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="block w-full p-2 border rounded"
                                value={profileData.user?.address[0]?.District || 'NA'}

                            />
                        ) : (
                            <p className="font-medium font-inter">{profileData.user?.address[0]?.District || 'NA'}</p>
                        )}
                    </div>
                </div>
            </div>
    )
}
export default Address
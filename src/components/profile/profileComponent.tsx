import React from 'react';
import PersonalDetails from './personalDetails';
import PersonalInformation from './personalInformation';
import Address from './address';

interface ProfileProps {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    category:"Premium" | "Standard" | "Ultimate",
    referralCode:string
}

const Profile: React.FC<ProfileProps> = ({
    name,
    role,
    location,
    email,
    phone,
    bio,
    category,
    referralCode
}) => {


    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <PersonalDetails name={name} location={location} role={role} category={category} referralCode={referralCode}/>

            <PersonalInformation name={name} email={email} phone={phone} bio={bio} />

            <Address />
        </div>
    );
};

export default Profile;

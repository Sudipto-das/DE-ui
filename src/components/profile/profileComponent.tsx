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
    country: string;
    state: string;
    postalCode: string;
    taxId: string;
    category:"Premium" | "Standard" | "Ultimate"
}

const Profile: React.FC<ProfileProps> = ({
    name,
    role,
    location,
    email,
    phone,
    bio,
    country,
    state,
    postalCode,
    taxId,
    category
}) => {


    return (
        <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
            <PersonalDetails name={name} location={location} role={role} category={category}/>

            <PersonalInformation name={name} email={email} phone={phone} bio={bio} />

            <Address country={country} state={state} postalCode={postalCode} taxId={taxId} />
        </div>
    );
};

export default Profile;

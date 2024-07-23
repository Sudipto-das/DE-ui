import React from 'react';
import Profile from '../../components/profile/profileComponent';


const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen py-10">
      <Profile
        name="Nguyen Duy Phuoc"
        role="Product Designer"
        location="Los Angeles, California, USA"
        email="jackadams@gmail.com"
        phone="(213) 555-1234"
        bio="Product Designer"
        country="United States of America"
        state="California, USA"
        postalCode="ERT 62574"
        taxId="AS564178969"
      />
    </div>
  );
};

export default ProfilePage;

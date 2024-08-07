import React from 'react';
import Profile from '../../components/profile/profileComponent';
import { useQuery } from '@tanstack/react-query';
import getProfileData from '../../functions/api/profile/fetchProfile';
import { AppContext } from '../../context/Context';


const ProfilePage: React.FC = () => {
  const { user: CurrentUser } = React.useContext(AppContext);

  const { data: profileData } = useQuery({
    queryKey: ['profile', CurrentUser.RecId],
    queryFn: () => getProfileData(CurrentUser)
  });
  console.log(profileData)
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
        category='Premium'
        referralCode='ABC15T'
      />
    </div>
  );
};

export default ProfilePage;

import React, { useContext, useEffect, useState } from 'react';
import Profile from '../../components/profile/profileComponent';
import getProfileData from '../../functions/api/profile/fetchProfile';
import { AppContext } from '../../context/Context';
import { useRecoilState } from 'recoil';
import { profileDataState } from '../../store/userProfileState';

const ProfilePage: React.FC = () => {
  const { user: CurrentUser, raiseToast } = useContext(AppContext);
  const [profileData, setProfileData] = useRecoilState(profileDataState);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (CurrentUser?.RecId && !profileData) {
      getProfileData(CurrentUser)
        .then((data) => {
          setProfileData(data.data.user);
          setIsLoading(false);
        })
        .catch((err) => {
          raiseToast(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [CurrentUser]);

  if (!CurrentUser?.RecId) {
    return <div>Loading user data...</div>;
  }

  if (isLoading) return <div>Loading profile data...</div>;

  console.log(profileData)
  return (
    <div className="min-h-screen py-10">
      {profileData ? (
        <Profile
          name={profileData.Name}
          role="Product Designer"
          location="Los Angeles, California, USA"
          email={profileData.Email}
          phone={profileData.Phone}
          bio="Product Designer"
          country="United States of America"
          state="California, USA"
          postalCode="ERT 62574"
          taxId="AS564178969"
          category="Premium"
          referralCode="ABC15T"
        />
      ) : (
        <div>Fetching Profile data ...</div>
      )}
    </div>
  );
};

export default ProfilePage;

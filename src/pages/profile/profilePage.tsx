import React, { useContext, useEffect } from 'react';
import Profile from '../../components/profile/profileComponent';
import getProfileData from '../../functions/api/profile/fetchProfile';
import { AppContext } from '../../context/Context';
import { useRecoilState } from 'recoil';
import { profileDataState } from '../../store/userProfileState';

const ProfilePage: React.FC = () => {
  const { user: CurrentUser, raiseToast } = useContext(AppContext);
  const [profileData, setProfileData] = useRecoilState(profileDataState);
  


  useEffect(() => {
    if (CurrentUser?.RecId && !profileData) {
      getProfileData(CurrentUser)
        .then((data) => {
          setProfileData({
            user: data.data.user,
            isLoading: false,
          });
        })
        .catch((err) => {
          raiseToast(err);
          setProfileData(prevState => ({ ...prevState, isLoading: false }));
        });
    } else {
      setProfileData(prevState => ({ ...prevState, isLoading: false }));
    }
  }, [CurrentUser]);

  if (!CurrentUser?.RecId) {
    return <div>Loading user data...</div>;
  }

  if (profileData.isLoading) return <div>Loading profile data...</div>;

  console.log(profileData)
  return (
    <div className="min-h-screen py-10">
      {profileData.user ? (
        <Profile
          name={profileData.user?.Name}
          role="Product Designer"
          location="Los Angeles, California, USA"
          email={profileData.user?.Email}
          phone={profileData.user?.Phone}
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

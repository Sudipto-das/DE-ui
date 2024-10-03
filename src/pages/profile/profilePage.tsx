import React, { useContext, useEffect } from 'react';
import Profile from '../../components/profile/profileComponent';
import getProfileData from '../../functions/api/profile/fetchProfile';
import { AppContext } from '../../context/Context';
import { useRecoilState } from 'recoil';
import { profileDataState } from '../../store/profileState/userProfileState';

const ProfilePage: React.FC = () => {
  const { user: CurrentUser, raiseToast } = useContext(AppContext);
  const [profileData, setProfileData] = useRecoilState(profileDataState);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!profileData.user) {
        
        try {
          const data = await getProfileData(CurrentUser); // Call the API function
          console.log(data)
          setProfileData({
            user: data.data,
            isLoading: false,
          });
        } catch (err:any) {
          raiseToast(err.message || 'Failed to load profile data');
          setProfileData(prevState => ({ ...prevState, isLoading: false }));
        }
      } else {
        setProfileData(prevState => ({ ...prevState, isLoading: false }));
      }
    };

    fetchProfileData();
  }, [CurrentUser]);

  // Handling when the user data is not yet available
  if (!CurrentUser?.RecId) {
    return <div>Loading user data...</div>;
  }

  // Handling when the profile data is still loading
  if (profileData.isLoading) {
    return <div>Loading profile data...</div>;
  }

  // Main profile page rendering
  return (
    <div className="min-h-screen py-10">
      {profileData.user ? (
        <Profile
          name={profileData.user?.Name}
          role={profileData.user.AccountNum}
          email={profileData.user?.Email}
          phone={profileData.user?.Phone}
          bio="Product Designer"
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

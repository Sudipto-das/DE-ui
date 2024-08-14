import React, { useContext, useEffect } from 'react';
import Profile from '../../components/profile/profileComponent';
import getProfileData from '../../functions/api/profile/fetchProfile';
import { AppContext } from '../../context/Context';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { profileDataState } from '../../store/profileState/userProfileState';
import { AddressState } from '../../store/profileState/AddressState';

const ProfilePage: React.FC = () => {
  const { user: CurrentUser, raiseToast } = useContext(AppContext);
  const [profileData, setProfileData] = useRecoilState(profileDataState);
  const  setAddress = useSetRecoilState(AddressState);

  useEffect(() => {
    if (CurrentUser?.RecId && !profileData) {
      getProfileData(CurrentUser)
        .then((data: any) => {
          setProfileData({
            user: data.data.user,
            isLoading: false,
          });

          // Filter the address to find the one with primarykey 1
          const primaryAddress = data.data.address.find((addr: any) => addr.IsPrimary === 1);

          if (primaryAddress) {
            setAddress(primaryAddress);
          }

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

  return (
    <div className="min-h-screen py-10">
      {profileData.user ? (
        <Profile
          name={profileData.user?.Name}
          role="Product Designer"
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

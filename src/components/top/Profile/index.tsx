import Image from "next/image";

import { profile } from "constants/profile";

import ContactButton from "./ContactButton";

const Profile = () => {
  return (
    <div className="py-4 px-4">
      <div className="flex items-center gap-8 py-4 md:justify-center">
        <Image
          className="rounded-full"
          src={profile.IMAGE_URL}
          width="128"
          height="128"
          alt="profile"
        />
        <div>
          <div>{profile.JOB}</div>
          <div className="text-xl">{profile.NAME}</div>
          <div>{profile.NAME_ROMAN}</div>
        </div>
      </div>
      <div className="whitespace-pre-wrap tracking-wide md:text-center">
        {profile.BIOGRAPHY}
      </div>
      <ContactButton />
    </div>
  );
};

export default Profile;

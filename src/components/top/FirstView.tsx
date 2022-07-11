import ContactButton from "components/common/ContactButton";
import Text from "components/common/Text";
import Profile from "components/top/Profile";

type Props = {
  profileImg: string;
  name: string;
  nameKana: string;
  job: string;
  catchCopy: string;
};

const FirstView = ({ catchCopy, profileImg, name, nameKana, job }: Props) => {
  return (
    <div className="py-4 px-4">
      <Profile
        profileImg={profileImg}
        name={name}
        nameKana={nameKana}
        job={job}
      />
      <Text text={catchCopy} />
    </div>
  );
};

export default FirstView;

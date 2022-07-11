import SnsLink from "./SnsLink";

import { Sn } from "types/aboutPage";

type Props = {
  snsLinks: Sn[];
};

const OfficialSns = ({ snsLinks }: Props) => {
  return (
    <ul className="flex list-none items-center justify-center p-4">
      {snsLinks.map((value) => {
        return (
          <SnsLink
            key={value.id}
            snsName={value.sns.data.attributes.name}
            iconUrl={value.sns.data.attributes.icon.data.attributes.url}
            profileUrl={value.url}
          />
        );
      })}
    </ul>
  );
};

export default OfficialSns;

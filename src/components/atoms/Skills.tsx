type Props = {
  skills: string[];
};

export const Skills = ({ skills }: Props) => {
  return (
    <span className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-gray-100 py-2 px-3 font-sans text-xs">
          {skill}
        </span>
      ))}
    </span>
  );
};

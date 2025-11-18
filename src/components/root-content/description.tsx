"use client";

type DescriptionProps = {
  descriptionBefore: string;
  descriptionAfter: string;
};

export function Description({
  descriptionBefore,
  descriptionAfter,
}: DescriptionProps) {
  const year = getYearsOfExperience();
  return (
    <p className="whitespace-pre-wrap">
      {descriptionBefore} {year} {descriptionAfter}
    </p>
  );
}

function getYearsOfExperience() {
  const careerStartedAt = new Date("2021-02");
  const now = new Date();
  const diffMZ = now.getTime() - careerStartedAt.getTime();
  const yearsOfExperience = Math.floor(diffMZ / (1000 * 60 * 60 * 24 * 365));
  return yearsOfExperience;
}

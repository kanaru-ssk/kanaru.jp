export function createDescription(
  descriptionBefore: string,
  descriptionAfter: string,
) {
  return `${descriptionBefore} ${getYearsOfExperience()} ${descriptionAfter}`;
}

function getYearsOfExperience() {
  const careerStartedAt = new Date("2021-02");
  const now = new Date();
  const diffMZ = now.getTime() - careerStartedAt.getTime();
  const yearsOfExperience = Math.floor(diffMZ / (1000 * 60 * 60 * 24 * 365));
  return yearsOfExperience;
}

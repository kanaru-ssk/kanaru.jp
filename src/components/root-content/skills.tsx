const SKILLS = ["GoogleCloud", "Go", "TypeScript", "Next.js"];

export function Skills() {
	return (
		<ul className="flex space-x-4">
			{SKILLS.map((skill) => (
				<li key={skill}>{skill}</li>
			))}
		</ul>
	);
}

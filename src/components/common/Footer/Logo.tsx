import Link from 'next/link';

const Logo = () => {
	return (
		<div className="text-center py-16">
			<Link href="/">
				<a>
					<amp-img width="96" height="48" src="/logo-white.svg" alt="logo" />
				</a>
			</Link>
		</div>
	);
};

export default Logo;
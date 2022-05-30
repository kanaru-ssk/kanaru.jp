import Link from 'next/link';

type Props = {
	snsName: string;
	iconUrl: string;
	profileUrl: string;
};
const SnsLink = ({ snsName, iconUrl, profileUrl }: Props) => {
	return (
		<li className="p-2 text-base">
			<Link href={profileUrl}>
				<a title={'佐々木哉瑠の' + snsName + 'プロフィールへのリンク'}>
					<amp-img src={iconUrl} width="32" height="20" alt="sns-link" />
				</a>
			</Link>
		</li>
	);
};

export default SnsLink;

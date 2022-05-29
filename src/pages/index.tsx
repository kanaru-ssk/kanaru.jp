import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

// lib
import { fetchAPI } from 'libs/api';
import { CommonRes, Common } from 'types/common';
import { TopPageRes, TopPage } from 'types/topPage';
import { AboutPageRes, AboutPage } from 'types/aboutPage';

// components
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import FirstView from 'components/Home/FirstView';
import AboutSection from 'components/Home/AboutSection';
import ProductsSection from 'components/Home/ProductsSection';

export const config = { amp: true };

type Props = {
	common: Common;
	top: TopPage;
	about: AboutPage;
};

const Home: NextPage<Props> = ({ common, top, about }: Props) => {
	return (
		<>
			<Head>
				<link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN} />
				<link rel="icon" href={common.favicon.data.attributes.url} />

				{/* ogp */}
				<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={top.ogp_img.data.attributes.url} />
				<meta property="og:title" content={top.title} />
				<meta property="og:description" content={top.description} />
				<meta name="twitter:card" content="summary" />

				<title>{top.title}</title>
				<meta name="description" content={top.description} />
			</Head>

			<Header logo={common.header_logo.data.attributes.url} />

			<main className="p-4">
				<FirstView catchCopy={top.catch_copy} />
				<AboutSection contents={about} />
				<ProductsSection />
			</main>

			<Footer logo={common.logo_white.data.attributes.url} copyRight={common.copy_right} snsLinks={about.links} />
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const commonRes: CommonRes = await fetchAPI('common', { populate: '*' });
	const topRes: TopPageRes = await fetchAPI('top-page', { populate: '*' });
	const aboutRes: AboutPageRes = await fetchAPI('about-page', {
		populate: { links: { populate: '*' }, profile_img: { populate: '*' }, ogp_img: { populate: '*' } },
	});

	const common: Common = commonRes.data.attributes;
	const top: TopPage = topRes.data.attributes;
	const about: AboutPage = aboutRes.data.attributes;
	return {
		props: {
			common,
			top,
			about,
		},
	};
};

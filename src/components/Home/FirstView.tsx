type Props = {
	catchCopy: string;
};

const FirstView = ({ catchCopy }: Props) => {
	// 置換 : \n -> <br />>
	const lbToBr = (txt: string) => {
		return txt.split(/(\n)/g).map((value, key) => (value === '\n' ? <br key={key} /> : value));
	};

	return <div className="flex flex-col justify-center h-screen">{lbToBr(catchCopy)}</div>;
};

export default FirstView;
const ProductsSection = () => {
	// \n -> <br />>
	const lbToBr = (txt: string) => {
		return txt.split(/(\n)/g).map((t) => (t === '\n' ? <br /> : t));
	};

	return (
		<div>
			<h2 className="py-4">products</h2>
			<div className="flex justify-center gap-8 flex-wrap">
				{/* <div className="w-72 h-72">
					<div className="w-72 h-40">
						<amp-img src="test.svg" width="288" height="160" alt="profile" />
					</div>
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.39118 8.99697L0.336048 2.94658C0.229606 2.84074 0.145136 2.7149 0.0874965 2.5763C0.0298564 2.4377 0.000183105 2.28907 0.000183105 2.13896C0.000183105 1.98885 0.0298564 1.84022 0.0874965 1.70162C0.145136 1.56302 0.229606 1.43718 0.336048 1.33134C0.551682 1.11804 0.842742 0.998413 1.14604 0.998413C1.44934 0.998413 1.7404 1.11804 1.95604 1.33134L8.81608 8.18393C9.02335 8.39201 9.14246 8.67196 9.14864 8.96559C9.15482 9.25922 9.04761 9.54394 8.84928 9.76056L1.96078 16.6667C1.85472 16.773 1.72875 16.8575 1.59006 16.9152C1.45137 16.9729 1.30267 17.0027 1.15246 17.0029C1.00225 17.0031 0.85347 16.9737 0.71461 16.9165C0.575751 16.8592 0.449532 16.7751 0.343162 16.669C0.236793 16.563 0.152354 16.437 0.0946681 16.2983C0.0369819 16.1596 0.00717817 16.0109 0.00695797 15.8607C0.00651325 15.5574 0.126596 15.2663 0.340791 15.0514L6.39118 8.99697Z"
							fill="#232C93"
						/>
					</svg>
					<h2>ホームページ制作</h2>
				</div>
				<div className="w-72 h-72">
					<amp-img src="test.svg" width="288" height="160" alt="profile" />
				</div> */}
			</div>
		</div>
	);
};

export default ProductsSection;

const handleBtnClick = (event) => {
	console.log(event.target.id);
	let link = event.target.id;

	switch (link) {
		case (link = 'github'):
			window.location.href = 'https://www.github.com';
			break;
		case (link = 'frontendMentor'):
			window.location.href = 'https://www.frontendmentor.io';
			break;
		case (link = 'linkedin'):
			window.location.href = 'https://www.linkedin.com';
			break;
		case (link = 'twitter'):
			window.location.href = 'https://www.twitter.com';
			break;
		case (link = 'instagram'):
			window.location.href = 'https://www.instagram.com';
			break;
		default:
			alert('That Link Does Not Work!');
	}
};

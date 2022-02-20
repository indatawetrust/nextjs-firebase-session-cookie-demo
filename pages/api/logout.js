async function handler(req, res) {
	res.setHeader(
		"Set-Cookie",
		"session=deleted;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT"
	);
	res.setHeader("Location", "/");
	res.status(302).end();
}

export default handler;
const recoursive = (n) => {
	if (n === 0) {
		return 0;
	}

	if (n === 1 || n === 2) {
		return 1;
	}

	return recoursive(n - 1) + recoursive(n - 2);
};

module.exports = { recoursive };
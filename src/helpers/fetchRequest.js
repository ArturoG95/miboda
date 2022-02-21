const baseUrl = process.env.REACT_APP_REQUEST_URL;

const fetchRequest = (endpoint, data, method = "GET") => {
	const url = `${baseUrl}/${endpoint}`;
	if (method === "GET") {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	}
};

const fetchRequestWithFormData = (endpoint, data, method = "GET") => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === "GET") {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			body: data,
		});
	}
};

export { fetchRequest, fetchRequestWithFormData };

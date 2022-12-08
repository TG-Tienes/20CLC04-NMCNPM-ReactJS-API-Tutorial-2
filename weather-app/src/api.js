export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bc8afbd301msh9d9761d6639c953p122340jsnd47d709d08cf',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

fetch('/cities', geoApiOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
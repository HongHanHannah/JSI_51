const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '938b1a3bc6msh8090c5895c9e564p10604ejsn37629bab6416',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
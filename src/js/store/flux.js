const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			// fetchData receives as param the objects that you want to retrieve (i.e.: planets, people, vehicles, etc).
			fetchData: param => {
				let url = `https://www.swapi.tech/api/${param}`;
				fetch(url)
					.then(res => res.json())
					.then(data => {
						// Information will be the planets, people and vehicles that we are going to receive.
						let information = [];
						data.results.forEach(item => {
							fetch(item.url)
								.then(res2 => res2.json())
								.then(data2 => {
									information.push(data2.result.properties);
								})
								.catch(err => console.log(err));
						});
						param == "planets"
							? setStore({ planets: information })
							: param == "people"
								? setStore({ people: information })
								: param == "vehicles"
									? setStore({ vehicles: information })
									: console.log("Invalid param.");
					})
					.catch(err => console.error(err));
			},
			setFavorites: param => {
				setStore({ favorites: param });
			}
		}
	};
};

export default getState;

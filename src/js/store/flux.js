const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      locations: [],
      starships: [],
      peoples: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        const store = getStore();
        console.log(store);
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            data.results.map((obj) => {
              fetch(obj.url)
                .then((res) => res.json())
                .then((data) => {
                  setStore({
                    locations: [...store.locations, data.result.properties],
                  });
                });
            });
          })
          .catch((err) => console.error(err));
        fetch("https://www.swapi.tech/api/starships")
          .then((res) => res.json())
          .then((data) => {
            data.results.map((obj) => {
              fetch(obj.url)
                .then((res) => res.json())
                .then((data) => {
                  setStore({
                    starships: [...store.starships, data.result.properties],
                  });
                });
            });
          })
          .catch((err) => console.error(err));
        fetch("https://www.swapi.tech/api/people")
          .then((res) => res.json())
          .then((data) => {
            data.results.map((obj) => {
              fetch(obj.url)
                .then((res) => res.json())
                .then((data) => {
                  setStore({
                    peoples: [...store.peoples, data.result.properties],
                  });
                });
            });
          })
          .catch((err) => console.error(err));

        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;

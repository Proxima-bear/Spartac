
// Create a new Map object
const myMap = new Map();

// Add key-value pairs to the map
myMap.set(1,[  {
  id: 1,
  Date: "25/02",
  title: "smth",
  urlimg: "../assets/img/girlImage.png",
  price: "9999",
  urlcontent: "smth",
  description: "Lorems ss jfhf fjfnf jjfsfbsfskjfsfksjfk"

}]);
myMap.set(2,  [{
  id: 3,
  Date: "22/02",
  title: "s",
  urlimg: "../assets/img/girlImage.png",
  price: "2222",
  urlcontent: "smth",
  description: "Lorems ss jfhf fjfnf jjfsfbsfskjfsfksjfk"
}]);

export function getPrograms() {
  return (
    [
      {
        id: 1,
        Date: "25/02",
        title: "smth",
        urlimg: "../assets/img/girlImage.png",
        price: "9999",
        urlcontent: "smth",
        description: "Lorems ss jfhf fjfnf jjfsfbsfskjfsfksjfk"

      },
      {
        id: 2,
        Date: "27/02",
        title: "mth",
        urlimg: "../assets/img/girlImage.png",
        price: "1111",
        urlcontent: "smth",
        description: "Lorems ss jfhf fjfnf jjfsfbsfskjfsfksjfk"
      },
      {
        id: 3,
        Date: "22/02",
        title: "s",
        urlimg: "../assets/img/girlImage.png",
        price: "2222",
        urlcontent: "smth",
        description: "Lorems ss jfhf fjfnf jjfsfbsfskjfsfksjfk"
      }
    ]
  )
}

export function getProgramsByid(id) {
  return (
   myMap.get(id)
  )
}




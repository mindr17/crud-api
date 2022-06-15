const postData = (cart) => {

  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Accept": "application/json"
    },
  })
  .then((res) => res.json());
}

export default postData;
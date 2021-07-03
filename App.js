function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data
        .map((user) => {
          return `<div class="user"> <p> ID:${user.id} </p> <p> Name:${user.name} </p> 
            <p> Email:${user.email} </p>
            <p> Username:${user.username} </p>
             <p> Phone:${user.phone} </p> 
            <p> Website:${user.website} </p> 
            <button id="getpost" class="button" onclick="getPost()">Get User Post</button> </div>`;
        })
        .join("");
      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })

    .catch((error) => {
      console.log(error);
    });
}
function getPost() {
  url = fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

getPost();

fetchData();

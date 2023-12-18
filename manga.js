document.addEventListener("DOMContentLoaded", function () {
    const searchContainer = document.getElementById("searchContainer");
    const searchItems = document.getElementById("searchItems");

    document.addEventListener("click", function (event) {
        if (event.target !== searchContainer && !searchContainer.contains(event.target)) {
            searchItems.style.display = "none";
        }
    });
});

function mysearch(event) {
    const searchItems = document.getElementById("searchItems");
    searchItems.style.display = "block";
    event.stopPropagation();
}

function searchmanga() {
    let input = document.getElementById("inputBox").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("mangaItem");

    for (i = 0; i < x.length; ++i) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}
function logout() {
    let x = JSON.parse(localStorage.getItem("user"));
    let y = localStorage.getItem("username");
    x.splice(y);
    localStorage.removeItem('loggedIn');
  
    window.location.href = 'manga.html';
  }
  
  document.getElementById('logoutButton').addEventListener('click', logout);


// function setToken(){
//     document.getElementById("bookmark_btn").style.display = 'none';
//     document.getElementById("bookmarked_btn").style.display = 'block';
//     let x = JSON.parse(localStorage.getItem("name")) || [];
    
//     localStorage.setItem("manhwa1", "true");
    
//     let name = document.getElementById("Title").innerHTML;

//     x.push(name);
    
//     localStorage.setItem("name", JSON.stringify(x));
// }
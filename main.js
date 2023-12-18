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
    localStorage.removeItem('loggedIn');
  }
  
  document.getElementById('logoutButton').addEventListener('click', logout);
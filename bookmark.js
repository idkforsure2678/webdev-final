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
  
  document.getElementById('logOut').addEventListener('click', logout);

function showEditProfile(){
    const show = document.getElementById('edit');
    show.style.display = "block";
}

// function changeUser(event) {
//     event.preventDefault();
//     localStorage.removeItem('username');
//     let newUser = document.getElementById('username').value;
//     localStorage.setItem('username', newUser);
    
// }

function changePass(event) {
    event.preventDefault();
    localStorage.removeItem('password');
    let newPass = document.getElementById('password').value;
    localStorage.setItem('password', newPass);
    
}



function deleteAcc(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('manhwa1');
    localStorage.removeItem('manhwa2');
    localStorage.removeItem('manhwa3');
    localStorage.removeItem('manhwa4');
    localStorage.removeItem('manhwa5');
    localStorage.removeItem("name");
    window.location.href = "MainPage.html";
}

x = [];

document.addEventListener("DOMContentLoaded", function() {

    if (!localStorage.getItem("name")) {
        localStorage.setItem("name", JSON.stringify([]));
    }
    addbookmarked();

    window.addEventListener("storage", function(event){
        if(event.key == "name") {
            x = JSON.parse(event.newValue);
            addbookmarked();
        }
    });

});


function addbookmarked() {
    let x = JSON.parse(localStorage.getItem("name")) || [];
    let bookmarksContainer = document.getElementById("bookmark_container");

    bookmarksContainer.innerHTML = "";

    x.forEach(item => {
        console.log("Item:", item);

        let manhwa_bookmark = document.createElement("div");
        manhwa_bookmark.className = "manhwa_bookmark";

        let name = document.createElement("div");
        name.className = "name";

        let current_chapter = document.createElement("div");
        current_chapter.className = "current_chapter";

        name.textContent = item;
        current_chapter.textContent = "Chapter 1";

        bookmarksContainer.appendChild(manhwa_bookmark);
        manhwa_bookmark.appendChild(name);
        manhwa_bookmark.appendChild(current_chapter);
    });
}

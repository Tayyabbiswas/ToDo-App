let addFrm = document.addfrm;
let text = addFrm.add;
let ul = document.querySelector(".todos");
let addItem = (item) => {
  let str = `<li>
          <span>${item}</span> <i class="far fa-trash-alt delete"></i>
        </li>`;
  ul.innerHTML += str;
};

addFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
    text.value = "";
  }
});

ul.addEventListener("click", (e) => {
  // check wheater clicked item is i tag
  if (e.target.nodeName === "I") {
    // remove parent of i tag i.e is li
    e.target.parentElement.remove();
  }
});

// handling search feature
let searchItem = (text) => {
  let listItem = ul.children;
  {
    for (let li of listItem) {
      if (li.innerText.toLowerCase().indexOf(text) === -1) {
        li.classList.add("filtered");
      } else {
        li.classList.remove("filtered");
      }
    }
  }
};
let searchText = document.querySelector(".search input");

searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});

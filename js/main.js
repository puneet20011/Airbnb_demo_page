console.log("Hello, Airbnb!");

const inTitle = document.querySelector("#input-title");
const inPrice = document.querySelector("#input-price");
const inDescription = document.querySelector("#input-description");
const btnCancel = document.querySelector("#button-cancel");

const onClickCancel = (event) => {
  //Don't navuagte to a different page.
  event.preventDefault();

  inTitle.value = "";
  inPrice.value = 0;
  inDescription.value = "";
};

btnCancel.addEventListener("click", onClickCancel);

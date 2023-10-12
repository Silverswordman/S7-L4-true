// prima cosa chiamo il bottone

const loadButton1 = document.getElementsByClassName("btn-primary")[0];
// console.log(loadButton1);
const loadButton2 = document.getElementsByClassName("btn-secondary")[0];

const getPexels = function () {
  fetch("https://api.pexels.com/v1/search?query=kittens", {
    headers: {
      Authorization: "a6at89TbBIPl78wCH2AsyVZeCxay5oq3qXTJuRxnxkLsMMrKgaUSmaov",
    },
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("error");
      }
    })
    .then((imgs) => {
      console.log("ecco l'API ", imgs);
    })
    .catch((error) => {
      console.log(error, "errore");
    });
};

const secondgetPexels = function () {
  fetch("https://api.pexels.com/v1/search?query=puppies", {
    headers: {
      Authorization: "a6at89TbBIPl78wCH2AsyVZeCxay5oq3qXTJuRxnxkLsMMrKgaUSmaov",
    },
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("error");
      }
    })
    .then((imgs) => {
      console.log("ecco l'API 2", imgs);
    })
    .catch((error) => {
      console.log(error, "errore");
    });
};

const clickButton = loadButton1.addEventListener("click", getPexels);
const clickButton2 = loadButton2.addEventListener("click", secondgetPexels);

// const hideButton = document.querySelectorAll(
//   ".btn-group button:nth-of-type(2)"
// );
// const allcards = document.getElementsByClassName("card");

// const allcardsArray = Array.from(allcards);
// console.log(allcardsArray);
////////////////////////////////////
///manca la funzione HIDE

const renderPhotos1 = function (arraycards) {
  const row = document.getElementsByClassName("row")[1];

  arraycards.forEach((card) => {
    const newCol = document.createElement("div");
    newCol.innerHTML = `<div class="card mb-4 shadow-sm">
    <img
      src="https://picsum.photos/id/237/300/200"
      class="bd-placeholder-img card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">Lorem Ipsum</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            Edit
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>`;
    newcol.classList.add("col-md-4");
    row.appendChild(newcol);
  });
};

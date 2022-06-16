const showCardTemplate = document.querySelector("[show-template]");
const showCardContainer = document.querySelector("[show-card-container]");
const favCardTemplate = document.querySelector("[fav-template]");
const favCardContainer = document.querySelector("[fav-card-container]");
const searchInput = document.querySelector("[data-search]");
const dataFavorite = document.querySelector("[data-favorite]");

let shows = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  shows.forEach(show => {
    const isVisible = show.name.toLowerCase().includes(value);
    show.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://api.tvmaze.com/shows")
  .then(res => res.json())
  .then(data => {
    shows = data.map(show => {
      const card = showCardTemplate.content.cloneNode(true).children[0];
      const favCard = favCardTemplate.content.cloneNode(true).children[0];
      const showTitle = card.querySelector("[data-title]");
      const favShowTitle = favCard.querySelector("[data-fav-title]");
      const showSummary = card.querySelector("[data-summary]");
      const showLanguage = card.querySelector("[data-language]");
      const showImage = card.querySelector("[data-image]");
      let showFavoriteCheckbox = card.querySelector("[my-checkbox]");
      const showFavoriteCheckboxStatus = showFavoriteCheckbox.checked;
      // const showFavoriteMessage = card.querySelector("[data-favorite]");

      showTitle.textContent = show.name;
      favShowTitle.textContent = show.name;
      showSummary.textContent = show.summary;
      showLanguage.textContent = `Language: ${show.language}`;
      showImage.src = show.image.medium;
      // showFavoriteMessage.textContent = "Add to my favorite shows";
      showCardContainer.append(card);

      showFavoriteCheckbox.addEventListener("input", e => {
        const isFavorite = e.target.checked;
        console.log(isFavorite);
        shows.forEach(show => {
          if (isFavorite) {
            show.favElement.classList.remove("hide");
            favCardContainer.append(favCard);
            // showFavoriteCheckbox.classList.add("hide");
            // showFavoriteMessage.textContent = `This show was added to your favorites`;
            show.isFavorite = true;
          } else {
            show.favElement.classList.add("hide");
            // showFavoriteMessage.textContent = `Add to my favorite shows`;
            show.isFavorite = false;
          }
        });
      });

      return {
        id: show.id,
        name: show.name,
        summary: show.summary,
        language: show.language,
        image: show.image.medium,
        element: card,
        favElement: favCard,
        isFavorite: showFavoriteCheckboxStatus,
      };
    });
  });

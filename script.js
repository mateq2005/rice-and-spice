const userCardTemplate = document.querySelector("[data-user-template]");
const userCardConatiner = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

fetch(`https://mateq2005.github.io/rice-and-spice/resources/recipes/breakfast/breakfast.json`)
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const image = card.querySelector("[data-image]");
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            image.src = user.image;
            header.textContent = user.name;
            body.textContent = user.description;
            userCardConatiner.append(card);
            return {
                image: user.image,
                name: user.name,
                description: user.description,
                element: card 
            }
        });
    });

const email = `mailto:mateusz.banaszczyk.dg@gmail.com`;
const contact = document.getElementById("contact");
contact.href = email;
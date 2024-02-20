const recipeCardTemplate = document.querySelector("[data-recipe-template]");
const recipeCardConatiner = document.querySelector("[data-recipe-cards-container]");

async function breakfast() {
    try {

        const response = await fetch('https://mateq2005.github.io/rice-and-spice/resources/recipes/breakfast.json')
        const data = await response.json();

        users = data.map(recipe => {
            const card = recipeCardTemplate.content.cloneNode(true).children[0];
            const image = card.querySelector("[data-image]");
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            image.src = recipe.image;
            header.textContent = recipe.name;
            body.textContent = recipe.description;
            recipeCardConatiner.append(card);
            return {
                image: recipe.image,
                name: recipe.name,
                description: recipe.description,
                element: card 
            };
        });

        } catch (error) {
            console.error('Error fetching data:', error);
        };
};

breakfast();

const email = `mailto:mateusz.banaszczyk.dg@gmail.com`;
const contact = document.getElementById("contact");
contact.href = email;
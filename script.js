// Récupération des éléments HTML
const container = document.querySelector(".container");

// Création de la constante timeToRunAnimation
const timeToRunAnimation = 5000;

// Création de la variable starIndex
let starIndex = 0;

// Création de la fonction createdStar qui va permettre de créer une étoile
const createStar = () => {
  // Création des éléments html
  const starItem = document.createElement("div");
  const styleItem = document.createElement("style");
  // Ajout des classes
  starItem.classList.add("star");
  starItem.classList.add(`star-${++starIndex}`);
  // Stylisation
  starItem.style.animation = `moveTo-${starIndex} ${timeToRunAnimation}ms linear forwards`;

  // Coordonnées sur X et Y stockées dans les constantes
  const endX = Math.random() * 200 - 100;
  // console.log(endX);
  const endY = Math.random() * 200 - 100;
  //console.log(endY);

  // Création de l'animation moveTo
  styleItem.innerHTML += `
		@keyframes moveTo-${starIndex} {
			20% {
				opacity: 0;
			}
			50% {
				opacity: 1;
			}
			100% {
				transform: scale(3) translate(${endX}vw, ${endY}vh);
				opacity: 0;
			}
		}
	`;

  // Ajout des éléments html créés dans le DOM
  container.appendChild(starItem);
  container.appendChild(styleItem);

  // La méthode setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => {
    //La méthode remove() retire l'élément courant du DOM.
    starItem.remove();
    styleItem.remove();
  }, timeToRunAnimation);
};

/**
 * Fonction createStars permettant la création de plusieurs étoiles
 * @param {Number} number
 */
const createStars = (number) => {
  // Boucle for
  for (let i = 0; i < number; i++) {
    // Appel de la fonction createStar
    createStar();
  }
};

//La méthode setInterval() appelle à plusieurs reprises la fonction createStars avec un délai fixe entre chaque appel.
setInterval(() => createStars(10), 100);

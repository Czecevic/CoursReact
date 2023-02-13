// Exercise 0 : The Beginning of the code

/* 
pour commencer l'exercice 0 nous allons d'abord revoir le concept de JSX (JS + HTML) 
pour faire cela nous allons appeler une fonction App comme ceci :

import 'App.css';

function App() {

}

export default App;
(le import App.css est optionnelle)
nous voyons alors que appleons bien la fonction App via le "fonction" et App qui sera le nom de la fonction
nous devrons ensuite pouvoir exporter cette fonction pour l'utiliser dans le fichier main.jsx via le 
"export default <nom de la fonction>"

à cette étape si vous lancez votre code via npm run dev vous devrez avoir un écran blanc (ou gris si vous avez mis le .css)
essayons de lui donner plus d'informations
ecrivez ceci : 

function App() {
  return (
    <h1>Hello World</h1>
  )
}

export default App;

nous avons alors un hello world qui s'affiche sur notre écran, super mais actuellement nous utilisons que 
le html, il n'y a pas vraiment d'utilisation du JS, passons à l'exercice 1 pour y remédier
*/

// ecirvez votre ici : 



// Exercise 1 

/*
reprenons le code nous avions fait et mettons un 
const name = 'John Doe'; avant le return que nous appelerons dans le h1 comme ceci :

return (
  <h1>Hello {name}</h1>
)

*/

// ecirvez votre ici : 




// Exercise 2
/* 
maintenant que nous avons intégrer une variable nous allons intégrer un tableau,
à la place de mettre 'John Doe' nous allons écrire ceci :
const names = ['John Doe', 'Jane Doe', 'Jane Du'];
il faudra que cela retourne le resutat suivant :
hello John Doe
hello Jane Doe
hello Jane Du

si vous souhaitez le voir visuellement, pensez à décommenter la ligne de AppCorrectionExo2

indice 1 => regarder map et forEach, l'un créer un nouveau tableau et l'autre ne fait que le parcouri, 
nous cherchons à créer ici un nouvelle element

indice 2 => https://codepen.io/gaearon/pen/GjPyQM?editors=0011

*/

// ecirvez votre ici : 


// Exercise 3

/* 
allons plus loin, nous allons rajouter ceci à notre main .jsx :
date={"10h20"}
ce qui donnera => <App date={"10h20"}/> à la place de <App/>
ce que nous allons s'appelle des props, il faudra donc passer en paramètre l'argument du props demander 
=> function App(props) {...} à vous de trouver comment avoir le resultat suivant : 
hello John Doe
10h20
hello Jane Doe
10h20
hello Jane Du
10h20
si vous souhaitez le voir visuellement, pensez à décommenter la ligne de AppCorrectionExo3

*/

// ecirvez votre ici :


// Exercise 4
/*
maintenant que nous avons pu voir comment manipuler les tableaux, variables et props, 
il faut que nous voyons les hooks notaments les useState que nous pouvons écrire ainsi :
const [count, setCount] = useState(props.number);

(pensez à rajouter le props dans le fichier main.jsx)

l'objectif de cette exercice est de manipuler directement le props via deux boutons, 
l'un permettant d'augmenter le props de 1 et l'autre de reduire le props de 2
si vous souhaitez le voir visuellement, pensez à décommenter la ligne de AppCorrectionExo4
*/

// ecrvez votre ici : 

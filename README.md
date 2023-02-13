# CoursReact

## Qu'est-ce que React ? 
**React** est une bibliothèque JavaScript **open-source** développée par Facebook qui facilite la création d'interfaces utilisateur (UI) interactives et dynamiques. React permet de créer des composants UI réutilisables qui peuvent être combinés pour créer des interfaces utilisateur complexes.

React utilise un concept appelé "virtual DOM" (DOM virtuel), qui permet de mettre à jour efficacement l'interface utilisateur lorsque les données changent. Lorsque des données sont modifiées, React met à jour uniquement les parties de l'interface utilisateur qui ont effectivement changé, plutôt que de mettre à jour l'ensemble de l'interface utilisateur. Cela permet de rendre les applications React plus rapides et plus fluides.

React est souvent utilisé pour créer des applications Web, mais il peut également être utilisé pour créer des applications mobiles avec les outils tels que React Native.

React est une bibliothèque très populaire et est utilisée par de nombreuses grandes entreprises pour développer leurs applications Web et mobiles.

### exemple de code en React qui affiche un simple composant "Bonjour, monde !"

```
import React from 'react';

function HelloWorld() {
  return <h1>Bonjour, monde !</h1>;
}

export default HelloWorld;
```

Ce code importe d'abord la bibliothèque React grâce à la directive *import*. Ensuite, la fonction *HelloWorld* est définie comme un composant React qui retourne un élément *h1* avec le texte "Bonjour, monde !". Enfin, le composant est exporté grâce à la directive *export* afin qu'il puisse être utilisé dans d'autres parties de l'application.

Pour afficher ce composant dans une page web, vous pouvez l'inclure dans un autre composant en utilisant sa balise JSX (JavaScript XML) comme ceci :

```
import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

Dans ce code, le composant *HelloWorld* est importé et inclus dans le composant *App* en utilisant sa balise JSX. Quand le composant App est rendu, il affichera le composant *HelloWorld*, qui affichera à son tour le texte "Bonjour, monde !".

Il y a de nombreuses autres choses que vous pouvez faire avec React, comme passer des props (propriétés) aux composants, utiliser des états et des événements, et créer des composants complexes en combinant d'autres composants. Vous pouvez en apprendre davantage sur React en consultant la documentation officielle ou en suivant des tutoriels en ligne.

## Comment fonctionne les props et les composants


### Les Composants 

En React, un composant est une fonction ou une classe qui retourne du JSX (JavaScript XML). Le JSX est une syntaxe ressemblant à du HTML qui permet de créer des éléments de l'interface utilisateur dans un code JavaScript.

Voici un exemple de composant simple qui affiche un message de bienvenue :


```
import React from 'react';

function WelcomeMessage() {
  return <h1>Bienvenue sur notre site !</h1>;
}
```

Dans ce code, la fonction *WelcomeMessage* est définie comme un composant React qui retourne un élément *h1* avec le texte "Bienvenue sur notre site !".

Les composants React sont réutilisables et peuvent être inclus dans d'autres composants en utilisant leur balise JSX. Par exemple, vous pouvez inclure le composant *WelcomeMessage* dans un autre composant comme ceci :

```
import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}
```

Dans ce code, le composant *WelcomeMessage* est importé et inclus dans le composant App en utilisant sa balise JSX. Quand le composant App est rendu, il affichera le composant *WelcomeMessage*, qui affichera à son tour le message de bienvenue.

Les composants React sont une des principales caractéristiques de la bibliothèque et permettent de créer des interfaces utilisateur complexes en combinant de nombreux composants simples. Ils sont également très utiles pour rendre les applications modulaires et réutilisables.


### Les props 

Les props (propriétés) sont des arguments passés aux composants lors de leur création. Ils permettent de passer des données aux composants enfants depuis le composant parent.

Voici un exemple de code qui passe une propriété name à un composant enfant depuis un composant parent :


```
import React from 'react';

function ChildComponent(props) {
  return <p>Bonjour, {props.name} !</p>;
}

function ParentComponent() {
  return <ChildComponent name="John" />;
}
```

Dans ce code, le composant *ChildComponent* accepte un objet *props* en argument et utilise la propriété *name* de cet objet pour afficher un message de bienvenue à l'utilisateur. Le composant *ParentComponent* utilise la balise JSX du composant *ChildComponent* et passe la propriété *name* avec la valeur "John" en utilisant l'attribut *name*.

Les props sont des propriétés immuables, c'est-à-dire qu'elles ne peuvent pas être modifiées par le composant enfant. Si le composant enfant a besoin de modifier des données, il doit utiliser un état géré à l'intérieur du composant.

Les props sont très utiles pour passer des données de haut en bas dans une application React, et permettent de rendre les composants plus modulaires et réutilisables.

## Les State

l'état (state en anglais) est utilisé pour stocker et gérer les données qui peuvent être modifiées par le composant. L'état est géré à l'intérieur du composant et peut être modifié en utilisant des méthodes spéciales comme *setState*.

*setState* est une méthode de la classe *Component* de React qui permet de mettre à jour l'état (state en anglais) d'un composant. L'état est une propriété de chaque composant qui peut être utilisée pour stocker et gérer les données qui peuvent être modifiées par le composant.

Il est important de noter que *setState* ne met à jour la valeur de l'état que de manière asynchrone, afin de garantir la performance de l'application. Si vous avez besoin d'accéder à la valeur mise à jour immédiatement après l'appel de *setState*, vous pouvez utiliser la fonction de rappel optionnelle de *setState* qui est appelée une fois que la mise à jour est terminée.

En utilisant *setState*, vous pouvez facilement mettre à jour l'état de votre composant et provoquer ainsi un nouveau rendu de l'interface utilisateur. C'est une des principales caractéristiques de React et une partie importante de la gestion de l'état dans une application React.

Voici un exemple de code qui utilise l'état pour afficher une liste de tâches :


```
import React, { useState } from 'react';

function TaskList() {
  // Déclarer une variable d'état "tasks" et une fonction "setTasks" pour la mettre à jour
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    // Ajouter une nouvelle tâche à la liste en utilisant la fonction "setTasks"
    setTasks([...tasks, { id: tasks.length, name: 'Nouvelle tâche' }]);
  }

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Ajouter une tâche</button>
    </div>
  );
}
```

Dans ce code, la variable d'état *tasks* est déclarée en utilisant la fonction *useState* de React et est initialisée à un tableau vide. La fonction *setTasks* est également déclarée et peut être utilisée pour mettre à jour la variable d'état *tasks*.

La fonction *handleClick* est définie pour ajouter une nouvelle tâche à la liste.

## Les événements dans React 

les événements sont gérés en utilisant des gestionnaires d'événements, qui sont des fonctions attachées aux éléments de l'interface utilisateur pour gérer les actions de l'utilisateur.

Voici un exemple de code qui utilise un gestionnaire d'événement pour afficher un message lorsqu'un bouton est cliqué :

```
import React from 'react';

function Button() {
  function handleClick() {
    alert('Le bouton a été cliqué !');
  }

  return <button onClick={handleClick}>Cliquer ici</button>;
}
```
Dans ce code, la fonction *handleClick* est définie comme gestionnaire d'événement pour l'événement *onClick* du bouton. Lorsque l'utilisateur clique sur le bouton, la fonction *handleClick* est appelée et affiche un message d'alerte.

Il existe de nombreux types d'événements en React, tels que *onChange* pour les éléments de formulaire, onSubmit pour les formulaires, *onMouseOver* pour la souris, etc. Vous pouvez trouver une liste complète des événements pris en charge par React sur la documentation officielle de la bibliothèque.

En utilisant des gestionnaires d'événements, vous pouvez facilement gérer les actions de l'utilisateur dans votre application React et y réagir en conséquence. C'est une partie importante de la création d'interfaces utilisateur interactives en React.

## La différence entre React et React Native

React utilise la syntaxe JSX (JavaScript XML) pour créer des éléments de l'interface utilisateur et est très populaire pour développer des applications Web modernes.

React Native, quant à lui, est une bibliothèque open-source conçue pour créer des applications mobiles natives pour les systèmes d'exploitation iOS et Android. React Native utilise également la syntaxe JSX pour créer des éléments de l'interface utilisateur, mais il les traduit en code natif pour les différentes plateformes cibles.

React est principalement utilisé pour développer des applications Web, tandis que React Native est utilisé pour développer des applications mobiles natives. Bien que les deux bibliothèques partagent une syntaxe similaire et certaines concepts de base, elles sont conçues pour des utilisations différentes.


# passons aux exercices 
allez dans le dossier **exercice** et cliquez sur le fichier **App.jsx**
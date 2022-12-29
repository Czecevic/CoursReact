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



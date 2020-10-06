# UE Calculator

Pour l'introduction à React liée au cours de Mr Tricarico, professeur à la HeH. Nous allons créyer ensemble une application permettant de calculer le nombre de point a faire pour passer une UE en connaissant les points du reste des AA. Pour un exemple fonctionnel, vous pouvez visiter [https://ue-calc.netlify.app/].

## Démarrez

### Installer Node et Yarn

Vous avez surement l'habitude d'exécuter du JavaScript sur votre ordinateur dans votre navigateur et toujours lié à une page web.
Un des outils que nous allons utiliser est Node (ou NodeJS) qui vas nous permettre d'exécuter du javascript en dehors d'un navigateur.
Il est basé sur le moteur JavaScript de chrome.

Pour l'installer cliquez [ici](https://nodejs.org/en/)

Yarn est le gestionnaire un gestionnaire de paquets pour Node. Il en existe d'autres mais il est déconseillé de les mélanger dans le même projet.
Vous pouvez l'installer [ici](https://classic.yarnpkg.com/en/docs/install)

Pour les habitué de Python on pourrais comparer `node` à la commande `python` ou `python3` et `yarn` à la commande `pip`

### L'éditeur de code

Si vous ne l'avez pas déjà installé, nous vous conseillons fortement [Visual Studio Code](https://code.visualstudio.com/) .
Ensuite nous vous conseillons d'installer [l'extension Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) qui vous permet en un seul clique de formatter votre code et de le rendre lisible.

## Lancez l'app

Une fois votre environement préparé, vous pouvez cloner ce repo (`git clone https://github.com/mirahi-io/UE-calculator.git`).
Pour installer les dépendances (c'est à dire les différentes librairies utilisée dans ce projet) vous pouvez lancer la comande `yarn install` à la racine du projet.
Yarn va alors installer toutes ces dépendances dans le dossier `.node_modules`.
Lors que l'installation est terminée vous pouvez lancer le projet avec `yarn start` et accéder à votre page web sur (http://localhost:3000)

### Structure du projet

- `package.json` : Le fichier contenant la liste des dépendances ainsi que les scripts utilisé pour le projet
- `yarn.lock` : Fichier servant à forcer la version des dépendances entre les collaborateurs``
- `index.js` : Fichier de départ de notre application, c'est là que React est initialisé
- `App.jsx` : Notre fichier JSX contenant toute notre page
- `components` : Le dossier contenant tous les composants de notre application
- `assets` : Le dossier contenant les différents éléments utilisé dans notre projet qui ne sont pas du code (police, images,...)
- `public` : Le dossier contenant le fichier html de base, avant que celui-ci ne soit modifié par React

## Exercices

Tous ces exercices ont pour but de vous apprendre React, il ne sera donc pas nécéssaire de modifier les fichier `.css`.

### Exercice 1

Si vous comparez avec l'exemple finalise (https://ue-calc.netlify.app/), vous remarquerez que vous n'avez pas la possiblité d'ajouter un cours à la liste.

Allez dans le point d'entrée de notre application, c'est à dire le fichier `App.jsx` et analysez la façon dont les compostants `Results`et `CoursesList` sont utilisés. essayez d'appliquer cette méthode au composant manquant.

<details>
  <summary>Notes</summary>

En React les composants commençant par des majuscules sont des composants React importé d'un fichier, tandis que les composant commencant par des minuscule sont des composant classique html.

Remarques qu'en React nous utilisons `className` au lieux de `class`. Avez vous une idée de la raison ?

<details>
  <summary>Réponse</summary>
En JavaScript le mot `class` est un mot clé utilisé pour déclarrer une classe, nous ne pouvons donc pas l'utiliser pour autre chose.
</details>

</details>

### Exercice 2

Maintenant que le composant s'affiche, vous remarquerez que celui-ci n'est pas fonctionnel.

Essayez de comprendre la ligne `const { addCourse, courses } = props` et de solutionner ce probleme.

<details>
  <summary>Indice</summary>

Les props (raccourci pour _properties_ ou propriétés) sont les "argument" qui sont passés au composants. De la même manière que vous pouvez passer un `class` à un composant html, en React vous pouvez passer tous types de propriétés à un composant

</details>

### Exercice 3

Essayez maintenant d'ajouter un cours à votre liste, vous verrez qu'il s'affiche bien, sauf pour le nom. Investiguez dans le fichier `CourseCard.jsx` pour trouver la raison

<details>
  <summary>Indice</summary>

Inspirez vous de la façon dont `points` et `percents` sont importé dans le JSX.

</details>

### Exercice 4

Le 1er cours s'affiche correctement, mais malheureusement il n'est pas possible d'en afficher plusieurs.
Pour résoudre ceci nous allons devoir investiguer le fichier `CoursesList.jsx` ou nous voyont qu'en effet, le composant `CourseCard` n'est chargé qu'une seule fois.
Cherchez une solution pour le charger un nombre de fois qui correspond à la longueur du tableau `courses` venant des props.

<detail>
  <summary>Indice</summary>

Comme pour l'ajout de la variable `name` dans l'exercice précédent, il est possible d'ajouter un tableau de composants directement dans le JSX. Pour celà l'utilisation de la fonction `.map` vous sera utile.

Notez qu'il est préférable que chaque élément JSX du tableau possède une porpriété `key` unique, celà permet à React d'optimiser le nombre de rendus.

</detail>

### Exercice 5

Il est enfin l'heure de faire fonctionner le résultat. Rendez-vous dans le fichier `Results.jsx`, en vous inspirant de la façon dont fonctionne le fonction `useState` dans `App.jsx` essayer de corriger la dernière erreur.

<detail>
      <summary>Indice</summary>
La valeur `() => {}` indique simplement une fonction vide, comme pourrais l'être `function() { }`

La fonction `useState` retourne un tableau donc la première valeur est l'élément du state, et la seconde est la fonction permettant de le changer. En effet React à besoin qu'une fonction spécifique soit utilisée plutôt qu'un simple réassignement classique comme `requiredPoints = 18`, celà viens du faite que React à besoin de savoirs quand une variable du state est modifiéé pour pouvoir re-exécuter le rendu des compostants qui en dépendent (et uniquement de ceux-ci !!)

</detail>

### Exercice Bonus

Hey oui tout fonctionne, mais si tu as encore du temps regarde comment utiliser `useEffect` pour que la ligne `setRequiredPoints(getRequiredPoints(courses));` ne s'exéute que si le contenu de `courses` à été modifié.

## Mise en production.

<details>
  <summary>Astuce</summary>
Si tu n'as pas pu suivre c'est pas grave, tu aura tout le temps de refaire les exercices une autre fois. Tu peux trouver la solution simplement en allant voir ma branche avec la commande `git checkout solution`.

Pour ne pas perdre tes modification je te conseille de les _commiter_ avant d'aller voir ma branche.

</details>

### Ajout sur GiHhub

Maintenant que tout fonctionne, tu peux crée un nouveau repo sur GitHub et y _push_ ton projet. N'oublie pas de rajouter `--force` à la commane `git remote add origin` pour forcer git à utiliser ton repo et pas le notre.

### Mise en place sur Netlify

Netlify est une plateforme permettant de mettre en ligne gratuitement ton site web simplement en lui donnant accès au repo GitHub.

Pour t'y inscrire vas sur https://app.netlify.com/ et connecte toi avec GitHub. Tu peux ensuite cliquer sur _New Site from Git_ et lui donner accès au bon repo, Netlify va automatiquement détecter les réglages de ton projet, tu peux faire suivant. Attent ensuite quelques minutes que le site ai fini de compiler et il sera accessible au lien en haut de la page !

Et le mieux ? À chaque fois que tu _push_ un nouveau _commit_ sur ton repo GitHub, Netlify le détecte et essaira de recompiler ton appliation et de mettre la mise à jour en ligne aussi vite que possible.

<br/>

Voilà ce petit tutoriel est fini, j'espère que tu te seras bien amusé et surtout que tu aura bien appris. Si tu as des question, des suggestion ou autre n'hésite pas à me contater à tim@mirahi.io ;)

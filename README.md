# UE Calculator

## Démarrez

### Installer Node et Yarn

Vous avez surement l'habitude d'exécuter du JavaScript sur votre ordinateur dans votre navigateur et toujours lié à une page web.
Un des outils que nous allons utiliser est Node (ou NodeJS) qui vas nous permettre d'exécuter du javascript en dehors d'un navigateur.
Il est basé sur le moteur JavaScript de chrome.

Pour l'installer cliquez [https://nodejs.org/en/](ici)

Yarn est le gestionnaire un gestionnaire de paquets pour Node. Il en existe d'autres mais il est déconseillé de les mélanger dans le même projet.
Vous pouvez l'installer [https://classic.yarnpkg.com/en/docs/install](ici)

Pour les habitué de Python on pourrais comparer `node` à la commande `python` ou `python3` et `yarn` à la commande `pip`

### L'éditeur de code

Si vous ne l'avez pas déjà installé, nous vous conseillons fortement [https://code.visualstudio.com/](Visual Studio Code).
Ensuite nous vous conseillons d'installer [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](l'extension Prettier) qui vous permet en un seul clique de formatter votre code et de le rendre lisible.

## Lancez l'app

Une fois votre environement préparé, vous pouvez cloner ce repo (`git clone https://github.com/mirahi-io/UE-calculator.git`).
Pour installer les dépendances (c'est à dire les différentes librairies utilisée dans ce projet) vous pouvez lancer la comande `yarn install` à la racine du projet.
Yarn va alors installer toutes ces dépendances dans le dossier `.node_modules`.
Lors que l'installation est terminée vous pouvez lancer le projet avec `yarn start` et accéder à votre page web sur [http://localhost:3000]

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

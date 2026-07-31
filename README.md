# Portfolio de David Delhaye

Site personnel construit avec Next.js, TypeScript et Tailwind CSS. Toutes les informations professionnelles sont regroupées dans un seul fichier : `src/data/content.ts`.

## 1. Installer Node.js

Node.js est le programme qui permet d’exécuter Next.js sur votre ordinateur. `npm` est l’outil installé avec Node.js pour télécharger les dépendances du projet.

1. Ouvrez [nodejs.org](https://nodejs.org/).
2. Téléchargez la version **LTS**, c’est-à-dire la version stable recommandée.
3. Lancez l’installation avec les options proposées par défaut.
4. Ouvrez un terminal et vérifiez l’installation :

```bash
node --version
```

La version affichée doit être au minimum `20.9.0`.

Vérifiez ensuite que npm est disponible :

```bash
npm --version
```

## 2. Installer les dépendances

Dans le terminal, placez-vous dans le dossier du projet, puis lancez :

```bash
npm install
```

Cette commande lit `package.json` et télécharge Next.js, React, Tailwind CSS, Lucide et Motion. Elle crée un dossier `node_modules` qu’il ne faut pas modifier manuellement.

## 3. Lancer le site localement

Dans le dossier du projet, lancez :

```bash
npm run dev
```

Cette commande démarre le serveur de développement. Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Les modifications apparaissent automatiquement après l’enregistrement d’un fichier.

Le portfolio se parcourt naturellement avec la molette ou le pavé tactile. La barre flottante permet d’atteindre directement une section et la ligne bleue placée sous cette barre indique la progression dans la page.

## 4. Arrêter le serveur

Revenez dans le terminal où le serveur fonctionne, puis appuyez sur :

```text
Ctrl + C
```

Cette combinaison arrête le serveur local. Elle ne supprime aucun fichier.

## 5. Modifier le contenu

Ouvrez uniquement :

```text
src/data/content.ts
```

Ce fichier ressemble à un dictionnaire Python ou à un fichier JSON. Les commentaires indiquent clairement où modifier le profil, les expériences, les compétences, les formations et le contact.

Conservez les virgules, les guillemets et les noms de propriétés. Modifiez seulement les valeurs placées entre guillemets.

## 6. Ajouter une expérience

Dans `src/data/content.ts`, repérez le tableau `experiences`.

1. Copiez un objet complet compris entre `{` et `}`.
2. Collez-le à l’endroit souhaité dans le tableau.
3. Modifiez `role`, `company`, `location`, `period` et `missions`.
4. Séparez deux objets par une virgule.

Chaque mission est une ligne entre guillemets dans le tableau `missions`.

## 7. Supprimer une compétence

Dans `src/data/content.ts`, repérez le tableau `skills`, puis la catégorie concernée.

Exemple :

```ts
items: ["Docker", "Azure DevOps", "Azure Pipelines", "Git"],
```

Supprimez la compétence avec ses guillemets et la virgule voisine. Ne supprimez pas les crochets `[` et `]`.

## 8. Espace Projets

L’espace Projets affiche volontairement le message « Cette section sera bientôt créée. ».

Le texte se trouve dans `src/data/content.ts`, dans `projectsSoonTitle` et `projectsSoonMessage`. La vraie structure des projets pourra être ajoutée lorsque les premiers contenus seront disponibles.

## 9. Espace Blog

L’espace Blog affiche lui aussi un message d’attente. Modifiez `blogSoonTitle` et `blogSoonMessage` pour changer ce texte. Les articles et les photographies seront intégrés plus tard, sans afficher de faux contenus aujourd’hui.

## 10. Modifier les coordonnées

Dans `src/data/content.ts`, repérez `profile` et `contactItems`.

- `email` contient l’adresse e-mail.
- `phone` contient le numéro sans espaces utilisé par le lien téléphonique.
- `phoneDisplay` contient le numéro affiché.
- `linkedin` contient l’adresse complète du profil LinkedIn.
- `location` contient la localisation.
- `workMode` contient le mode de travail.

Mettez également à jour les valeurs correspondantes dans `contactItems` afin que les liens et les textes affichés restent identiques.

## 11. Changer la couleur principale

Ouvrez `src/app/globals.css`. Au début du fichier, repérez :

```css
--blue: #246bfd;
```

Remplacez `#246bfd` par le code du bleu principal. Les autres variables permettent d’ajuster le bleu nuit, le bleu clair et la couleur de fond.

## 12. Remplacer le CV

1. Préparez le nouveau CV au format PDF.
2. Nommez-le exactement `CV_DELHAYE.pdf`.
3. Placez-le dans le dossier `public`.
4. Acceptez le remplacement de l’ancien fichier.

Le lien `/CV_DELHAYE.pdf` continuera ainsi de fonctionner sans modifier le code.

## 13. Vérifier le site avant publication

Exécutez d’abord le contrôle du code :

```bash
npm run lint
```

Cette commande signale les erreurs de qualité ou d’accessibilité détectables automatiquement.

Vérifiez ensuite les types TypeScript :

```bash
npm run typecheck
```

Enfin, créez la version de production :

```bash
npm run build
```

La publication est prête lorsque les trois commandes se terminent sans erreur.

## 14. Déployer sur Vercel

La méthode la plus simple passe par GitHub :

1. Envoyez le projet sur un dépôt GitHub.
2. Connectez-vous sur [vercel.com](https://vercel.com/) avec GitHub.
3. Cliquez sur **Add New**, puis **Project**.
4. Importez le dépôt du portfolio.
5. Vérifiez que Vercel reconnaît automatiquement **Next.js**.
6. Conservez les réglages proposés et cliquez sur **Deploy**.

Chaque mise à jour envoyée sur la branche de production déclenchera ensuite un nouveau déploiement. La procédure officielle est détaillée dans la [documentation Vercel](https://vercel.com/docs/git).

## 15. Récupérer de futures modifications avec Git

Vérifiez d’abord la branche active :

```bash
git branch --show-current
```

Récupérez ensuite les modifications du dépôt distant :

```bash
git pull
```

`git pull` télécharge puis applique les nouveaux changements. Enregistrez ou validez vos modifications locales avant cette commande pour éviter les conflits.

## 16. Revenir en arrière en cas d’erreur

Pour annuler les modifications non enregistrées dans Git sur le fichier de contenu :

```bash
git restore src/data/content.ts
```

Attention : cette commande efface les modifications locales non validées de ce fichier.

Pour annuler proprement une modification déjà enregistrée dans Git, affichez l’historique :

```bash
git log --oneline
```

Copiez l’identifiant de la modification à annuler, puis utilisez :

```bash
git revert IDENTIFIANT
```

`git revert` crée une nouvelle modification qui annule l’ancienne sans réécrire l’historique.

## Fichiers principaux

- `src/data/content.ts` : toutes les informations affichées.
- `src/app/globals.css` : couleurs et styles globaux.
- `src/components/portfolio/FluidPortfolio.tsx` : mise en page, navigation et animations ; à modifier seulement si vous connaissez React.
- `public/profile.jpeg` : photo de profil.
- `public/CV_DELHAYE.pdf` : CV téléchargeable.
- `package.json` : commandes et liste des dépendances.

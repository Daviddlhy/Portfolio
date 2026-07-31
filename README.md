# Site personnel de David Delhaye

Ce site présente le parcours de David Delhaye, Data Engineer. Il fonctionne sans installation et sans logiciel particulier.

## 1. Ouvrir le site

1. Ouvrez le dossier du site.
2. Double-cliquez sur le fichier `index.html`.
3. Le site s’ouvre dans votre navigateur internet habituel.

Il n’est pas nécessaire d’installer quoi que ce soit.

## 2. Modifier un texte

1. Ouvrez `index.html` avec un éditeur de texte, par exemple Visual Studio Code, TextEdit ou le Bloc-notes.
2. Repérez la zone située entre :
   - `<!-- DÉBUT DU CONTENU À MODIFIER -->`
   - `<!-- FIN DU CONTENU À MODIFIER -->`
3. Repérez ensuite le nom de la section, par exemple `<!-- À PROPOS -->`.
4. Remplacez uniquement le texte visible entre les balises, sans supprimer les signes `<` et `>`.
5. Enregistrez le fichier, puis actualisez la page dans le navigateur.

Exemple : pour modifier le titre professionnel, recherchez `Data Engineer` dans `index.html` et remplacez uniquement ces mots aux endroits souhaités.

## 3. Modifier une expérience

Dans `index.html`, repérez `<!-- EXPÉRIENCES -->`. Chaque expérience se trouve dans un bloc qui commence par :

```html
<article class="experience-card reveal">
```

Dans ce bloc, vous pouvez modifier la période, le lieu, l’entreprise, le poste et les missions. Une mission correspond à une ligne entourée par `<li>` et `</li>`.

Pour ajouter une expérience, copiez un bloc complet `<article>...</article>`, collez-le dans la timeline, puis remplacez son contenu. Pour en supprimer une, effacez son bloc `<article>...</article>` complet.

## 4. Ajouter ou supprimer une compétence

Dans `index.html`, repérez `<!-- COMPÉTENCES -->`, puis la catégorie concernée.

- Pour ajouter une compétence, ajoutez `<li>Nom de la compétence</li>` dans la liste de la catégorie.
- Pour supprimer une compétence, effacez toute la ligne `<li>Nom de la compétence</li>`.

Ne modifiez pas le nom des catégories sauf si votre CV est également mis à jour.

## 5. Modifier les coordonnées

Dans `index.html`, repérez `<!-- CONTACT -->`.

- Pour l’e-mail, modifiez à la fois le texte affiché et l’adresse placée après `mailto:`.
- Pour le téléphone, modifiez le numéro affiché et le numéro placé après `tel:`. Dans la partie `tel:`, ne mettez ni espace ni tiret.
- Pour LinkedIn, remplacez l’adresse commençant par `https://` et le texte affiché.
- Pour la localisation, recherchez `Île-de-France` dans `index.html` et remplacez-la aux endroits concernés.

## 6. Changer la couleur principale

Ouvrez `style.css`. Tout en haut du fichier, repérez :

```css
--accent: #0078d4;
```

Remplacez `#0078d4` par le code de la couleur souhaitée, puis enregistrez. Un code couleur est une valeur composée d’un `#` suivi de six caractères.

## 7. Remplacer le CV téléchargeable

1. Préparez votre nouveau CV au format PDF.
2. Nommez-le exactement `CV_DELHAYE.pdf`.
3. Placez-le dans le même dossier que `index.html`.
4. Acceptez de remplacer l’ancien fichier lorsque votre ordinateur le demande.

Si vous choisissez un autre nom de fichier, vous devrez aussi remplacer `CV_DELHAYE.pdf` dans `index.html`.

## 8. Publier gratuitement avec GitHub Pages

1. Créez un compte sur [GitHub](https://github.com/) si nécessaire.
2. Créez un nouveau dépôt, c’est-à-dire un dossier de projet en ligne.
3. Ajoutez au minimum `index.html`, `style.css`, `script.js` et `CV_DELHAYE.pdf` dans ce dépôt.
4. Ouvrez **Settings**, puis **Pages** dans la colonne de gauche.
5. Dans **Build and deployment**, choisissez **Deploy from a branch**.
6. Sélectionnez votre branche principale, généralement `main`, puis le dossier `/(root)`.
7. Cliquez sur **Save**.
8. GitHub affichera l’adresse publique du site après quelques minutes.

La procédure officielle et à jour est disponible dans la [documentation GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Attention : le site et le CV deviennent publics sur internet après publication.

## 9. Fichiers à ne pas modifier inutilement

- `style.css` contient toute la mise en page. Modifiez seulement la couleur principale si vous n’êtes pas à l’aise avec le code.
- `script.js` gère le menu mobile et les apparitions au défilement. Il n’est pas nécessaire de le modifier.
- Ne renommez pas `index.html`, `style.css` ou `script.js`, car ils sont reliés entre eux.
- Conservez les quatre fichiers principaux dans le même dossier.

Toutes les informations personnelles et professionnelles se modifient directement dans `index.html`.

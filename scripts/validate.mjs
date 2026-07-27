import { access, readFile } from "node:fs/promises";
import { profile } from "../data/profile.js";

const projectRoot = new URL("../", import.meta.url);
const html = await readFile(new URL("index.html", projectRoot), "utf8");
const script = await readFile(new URL("script.js", projectRoot), "utf8");

const requiredFiles = [
    "CV_DELHAYE.pdf",
    "styles.css",
    "script.js",
    "data/profile.js",
    "assets/profile.jpeg",
    "og-circle-blue.png",
    "og-data-engineer.png",
];

await Promise.all(requiredFiles.map((file) => access(new URL(file, projectRoot))));

const requiredAnchors = [
    "accueil",
    "profil",
    "expertises",
    "parcours",
    "projets",
    "methode",
    "formation",
    "contact",
];

for (const anchor of requiredAnchors) {
    if (!html.includes(`href="#${anchor}"`) && !script.includes(`id="${anchor}"`)) {
        throw new Error(`Ancre manquante : ${anchor}`);
    }
}

if (!html.includes('lang="fr"')) throw new Error("Langue du document manquante.");
if (!html.includes('name="description"')) throw new Error("Meta description manquante.");
if (!html.includes('href="#contenu"')) throw new Error("Lien d’évitement manquant.");
if (!script.includes("profile.experiences")) throw new Error("Les expériences ne sont pas rendues depuis les données.");
if (!profile.experiences.length) throw new Error("Aucune expérience dans le profil.");
if (!profile.education.length) throw new Error("Aucune formation dans le profil.");
if (profile.projects.length !== 0) throw new Error("Des projets non présents dans le CV ont été ajoutés.");

console.log("Validation statique réussie : contenu, ancres et ressources sont présents.");

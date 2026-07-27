import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = join(projectRoot, "dist");

const sourceAssets = [
    { route: "/", file: "index.html", type: "text/html; charset=utf-8" },
    { route: "/index.html", file: "index.html", type: "text/html; charset=utf-8" },
    { route: "/styles.css", file: "styles.css", type: "text/css; charset=utf-8" },
    { route: "/script.js", file: "script.js", type: "text/javascript; charset=utf-8" },
    { route: "/data/profile.js", file: "data/profile.js", type: "text/javascript; charset=utf-8" },
    { route: "/CV_DELHAYE.pdf", file: "CV_DELHAYE.pdf", type: "application/pdf" },
    { route: "/og-data-engineer.png", file: "og-data-engineer.png", type: "image/png" },
    { route: "/og-circle-blue.png", file: "og-circle-blue.png", type: "image/png" },
    { route: "/assets/profile.jpeg", file: "assets/profile.jpeg", type: "image/jpeg" },
];

const embeddedAssets = {};

for (const asset of sourceAssets) {
    const source = await readFile(join(projectRoot, asset.file));
    embeddedAssets[asset.route] = {
        body: source.toString("base64"),
        type: asset.type,
    };
}

const workerSource = `const ASSETS = ${JSON.stringify(embeddedAssets)};

function decodeBase64(value) {
    const binary = atob(value);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
}

export default {
    async fetch(request) {
        const url = new URL(request.url);
        const asset = ASSETS[url.pathname];

        if (!asset) {
            return new Response("Page introuvable", {
                status: 404,
                headers: { "content-type": "text/plain; charset=utf-8" },
            });
        }

        const isMutableAsset = url.pathname === "/"
            || url.pathname === "/index.html"
            || asset.type.startsWith("text/css")
            || asset.type.startsWith("text/javascript");
        const cacheControl = isMutableAsset
            ? "public, max-age=0, must-revalidate"
            : "public, max-age=86400";

        const body = asset.type.startsWith("text/html")
            ? new TextDecoder()
                .decode(decodeBase64(asset.body))
                .replaceAll(
                    'content="og-data-engineer.png"',
                    \`content="\${url.origin}/og-data-engineer.png"\`,
                )
                .replaceAll(
                    'href="og-circle-blue.png"',
                    \`href="\${url.origin}/og-circle-blue.png"\`,
                )
            : decodeBase64(asset.body);

        return new Response(body, {
            headers: {
                "content-type": asset.type,
                "cache-control": cacheControl,
                "x-content-type-options": "nosniff",
                "referrer-policy": "strict-origin-when-cross-origin",
            },
        });
    },
};
`;

await rm(outputRoot, { recursive: true, force: true });
await mkdir(join(outputRoot, "server"), { recursive: true });
await writeFile(join(outputRoot, "server", "index.js"), workerSource);

console.log("Portfolio build ready in dist/server/index.js");

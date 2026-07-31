import { spawn } from "node:child_process";

const host = "127.0.0.1";
const port = 3000;
const localUrl = `http://${host}:${port}`;
const pollIntervalMs = 300;
const startupTimeoutMs = 20_000;
let browserOpened = false;
let readinessCheckInProgress = false;

function siteIsReady() {
  return fetch(localUrl, { signal: AbortSignal.timeout(1_000) })
    .then((response) => response.ok)
    .catch(() => false);
}

function openInBrave() {
  if (browserOpened) return;
  browserOpened = true;

  const browser = spawn("open", ["-a", "Brave Browser", localUrl], {
    detached: true,
    stdio: "ignore",
  });

  browser.unref();
  console.log(`Portfolio ouvert dans Brave : ${localUrl}`);
}

if (await siteIsReady()) {
  openInBrave();
  process.exit(0);
}

const server = spawn(
  "npm",
  ["run", "dev", "--", "--hostname", host, "--port", String(port)],
  { stdio: "inherit" },
);

const startedAt = Date.now();
const poll = setInterval(async () => {
  if (readinessCheckInProgress || browserOpened) return;
  readinessCheckInProgress = true;

  try {
    if (await siteIsReady()) {
      clearInterval(poll);
      openInBrave();
      return;
    }

    if (Date.now() - startedAt > startupTimeoutMs) {
      clearInterval(poll);
      console.error("Le site n’a pas pu démarrer sur le port 3000.");
      server.kill("SIGINT");
    }
  } finally {
    readinessCheckInProgress = false;
  }
}, pollIntervalMs);

server.on("exit", (code) => {
  clearInterval(poll);
  process.exitCode = code ?? 0;
});

#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

console.log("config", config);

import "$std/dotenv/load.ts";

await dev(import.meta.url, "./main.ts", config);

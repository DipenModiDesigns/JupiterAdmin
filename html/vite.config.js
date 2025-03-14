import { resolve } from "path";
import { readdirSync } from "fs";

const htmlFiles = readdirSync("public").filter(file => file.endsWith(".html"));

const input = htmlFiles.reduce((acc, file) => {
    acc[file] = resolve(__dirname, "public", file);
    return acc;
}, {});

export default {
    root: "public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input,
        },
    },
};

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactCssDefault from "rollup-plugin-react-scoped-css";
import { resolve } from "path";
//@ts-ignore
const reactCss = reactCssDefault.default as typeof reactCssDefault;

// https://vitejs.dev/config/
console.log(reactCss, react);
export default defineConfig({
	plugins: [react(), reactCss()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "/src/global.scss";`,
			},
		},
	},
	resolve: {
		alias: [
			{ find: "@src", replacement: resolve(__dirname, "src") },
			{ find: "@img", replacement: resolve(__dirname, "src/img") },
			{ find: "@pc", replacement: resolve(__dirname, "src/pc") },
			{ find: "@mobile", replacement: resolve(__dirname, "src/mobile") },
		],
	},
});

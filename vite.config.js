import { defineConfig } from "vite";
import { resolve } from 'path'
import htmlInjectionPlugin from "./plugins/html-injection";



export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'about.html'),
            },
        },
    },
    plugins: [
        htmlInjectionPlugin({
            globalParts:[
                {
                    path:'./global/metrika.html',
                    injectTo: 'head'
                },
                {
                    path:'./global/headScript.js',
                    injectTo: 'head',
                    type: 'js'
                },
                {
                    path:'./global/style.css',
                    injectTo: 'head',
                    type: 'css'
                },
                {
                    path:'./global/prepend.html',
                    injectTo: 'body-prepend'
                },
                {
                    path:'./global/append.html',
                    injectTo: 'body'
                }
            ]
        }),
    ]
});
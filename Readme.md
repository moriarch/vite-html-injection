Vite плагин для вставки компонентов в html файл. 
Поддерживает глобальную вставку, так и импорт компонентов.


Пример настройки плагина `vite.config.js` 
```
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
```

Глобальные части объявляются в `globalParts`

```
{
	path:'./global/headScript.js', //путь от корня
	injectTo: 'head|body-prepend|body', // в шапку, в начало body, в конец body 
	type: 'js|css|raw' // подставляет тег style, script, либо только содержимое файла
},
```

Импорт компонентов происходит в теге `<import />`, переменные как атрибуты. 
Путь до компонента, должен идти от корня.

```
<import

	src="./parts/item.html"
	
	name="product 1"
	
	image="/image/1.jpg"

/>
```
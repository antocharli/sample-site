export function HTML(htmlConfig) {
	const {lang, styles, helmet, app, js, cssHash, data} = htmlConfig
	return (`<!doctype html>
            <html lang="${lang}">
                <head>
                    <meta name="theme-color" content="#000000"/>${styles}${helmet.title}${helmet.meta.toString()}${helmet.link.toString()}
                    <script>
                        var __initialData = ${JSON.stringify(data)}
                    </script>
                </head>
                <body>
                    <div id="react-root">${app}</div>
                    ${js}${cssHash}
                </body>
            </html>`)
}
export function HTML(htmlConfig) {
	const {lang, styles, helmet, app, js, cssHash, data} = htmlConfig
	return (`<!doctype html>
            <html lang="${lang}">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <!-- Google Font -->
                    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,700,700i" rel="stylesheet">
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/css/flat-ui.css" rel="stylesheet">
                    <link href="//localhost:3001/css/flat-icon.css" rel="stylesheet">
                    <link href="//localhost:3001/css/common.css" rel="stylesheet">
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
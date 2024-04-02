const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Could Not Find URL</title>
</head>
<body>
    <h2>that has 404 errors</h2>
    <img width="600" src="https://i.pinimg.com/736x/ad/67/dd/ad67dd7613600476845fe58edf9f2e1d.jpg" alt="">
    <h2>why would there be a website called <span id="url-sub"></span></h2>
    <h2><a href="/">GO HOME</a></h2>
    <script>

    function getSecondPart(str) {
        return str.split('3000/')[1];
    }

        const urlPeice = document.querySelector('#url-sub')
        urlPeice.textContent = getSecondPart(window.location.href)

    </script>
    
</body>
</html>`

const notFound = (req,res) => res.status(404).send(HTML)

module.exports = notFound


function loadIndex(unit, titles, footers) {
  let content = `
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="./styles.css">
    <title>${titles[0][parseInt(unit)]}</title>
    </head>
  <body class="column">
    <h1 class="header1">${titles[0][parseInt(unit)]}</h1>
    <h2 class="header2">Proposta de materials</h2>
    <h3 class="header3">Ariadna Plans Raubert</h3>`

  for (let i = 0; i < titles[parseInt(unit)].length; i++) {
    content += `<a href="${unit}_${leadingZeros(i, 2)}.html" class="link link-index">> ${titles[parseInt(unit)][i]}</a>`
  };

  content += `${footers[parseInt(unit)]}</body>`;
  document.documentElement.innerHTML = content;
}

function loadPdf(unit, index, titles) {
  let content = `
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="./styles.css">
    <script src="data.js"></script>
    <title>${titles[parseInt(unit)][parseInt(index)]}</title>
  </head>
  <body class="column">
    <h1 class="header1">${titles[parseInt(unit)][parseInt(index)]}</h1>
    <a href="${unit}_index.html" class="link link-back">&lt; tornar a l'índex</a>
    <iframe src="pdf/${unit}/${unit}_${index}.pdf" style="width:1200px; height:800px; border:none;"></iframe>
  </body>`;
  document.documentElement.innerHTML = content;
}

function leadingZeros(num, length) {
  let numLength = num.toString().length;
  return (length > numLength) ? "0".repeat(length - numLength) + num.toString() : num.toString();
}
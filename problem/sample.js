var processFile = function () {
    let file = 'text.txt';
    // Read the file and print its contents.
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.send(null);

    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }

}

console.log(processFile());
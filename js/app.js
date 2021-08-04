$(document).ready(function() {
    $("#getUserParameters").click(function() {
        var genreValue = $('input[name="genre"]:checked').val();
        var tempoValue = $('input[name="tempo"]:checked').val();
        var keyValue = $('input[name="key"]:checked').val();
        var timeSignatureValue = $('input[name="timeSignature"]:checked').val();

        printUserSelectedParameters(genreValue, tempoValue, keyValue, timeSignatureValue);
        showSelectedLeadSheets(genreValue, tempoValue, keyValue, timeSignatureValue);
        isMusicAvailable();
        clearAllSelections();

        function printUserSelectedParameters(genreValue, tempoValue, keyValue, timeSignatureValue) {
            var printTempo = tempoValue
            var printGenre;
            var printKey;
            var printTimeSignature;

            if (keyValue.includes("sharp")) {
                printKey = keyValue.replace("sharp", "&#9839");
            } else if (keyValue.includes("flat")) {
                printKey = keyValue.replace("flat", "&#9837")
            } else {
                printKey = keyValue
            }

            if (genreValue.includes("AfroLatinBossa")) {
                printGenre = genreValue.replace("AfroLatinBossa", "Afro/Latin/Bossa");
            } else {
                printGenre = genreValue;
            }

            if (timeSignatureValue.includes("over")) {
                printTimeSignature = timeSignatureValue.replace("over", "/")
            } else {
                printTimeSignature = timeSignatureValue
            }

            $("#printUserSelectedParameters").html("You have selected the following options: </br>Genre: " + printGenre + "</br>Tempo: " + printTempo + "</br>Key: " + printKey
            + "</br>Time Signature: " + printTimeSignature);
        }

         function showSelectedLeadSheets(genreValue, tempoValue, keyValue, timeSignatureValue) {
            $(".leadSheet").hide()
             var parametersString = ""

             if ((genreValue == "All") && (tempoValue == "All") && (keyValue == "All") && (timeSignatureValue == "All")) {
                 parametersString = ".leadSheet"
             } else {
                 if (!(genreValue == "All")) {
                     parametersString = "." + genreValue
                 }
                 if (!(tempoValue == "All")) {
                     parametersString += "." + tempoValue
                 }
                 if (!(keyValue == "All")) {
                     parametersString += "." + keyValue
                 }
                 if (!(timeSignatureValue == "All")) {
                     parametersString += "." + timeSignatureValue
                 }
             }
             $(parametersString).show()
        }

        function isMusicAvailable() {
            resultCount = $('.leadSheet:visible').length
            if ($('.leadSheet:visible').length) {
                $("#printIfMusicAvailable").html("There are " + resultCount + " lead sheets that fall within these parameters. If you'd like to download any of these, right click on your desired lead sheet and select 'Save Image.' If you think there's a standard that should be here but isn't, please visit the Contribute page and let us know!");
            } else {
                $("#printIfMusicAvailable").html("Sorry, we couldn't find any lead sheets that fall within these parameters. If you think there's a standard that should be here, please visit the Contribute page and let us know!");
            }
        }
    })
})
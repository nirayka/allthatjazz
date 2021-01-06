$(document).ready(function(){

    $("#getUserParameters").click(function() {
        var genreValue = $('input[name="genre"]:checked').val();
        var tempoValue = $('input[name="tempo"]:checked').val();
        var keyValue = $('input[name="key"]:checked').val();
        var timeSignatureValue = $('input[name="timeSignature"]:checked').val();
        printUserSelectedParameters(genreValue, tempoValue, keyValue, timeSignatureValue);
        showSelectedLeadSheets(genreValue, tempoValue, keyValue, timeSignatureValue);
    })
})

    function printUserSelectedParameters(genreValue, tempoValue, keyValue, timeSignatureValue) {
        var printGenre = genreValue
        var printTempo = tempoValue
        var printKey;
        var printTimeSignature;

        if (keyValue.includes("sharp")) {
            printKey = keyValue.replace("sharp", "&#9839");
        } else if (keyValue.includes("flat")) {
            printKey = keyValue.replace("flat", "&#9837")
        } else {
            printKey = keyValue
        }

        if (timeSignatureValue.includes("over")) {
            printTimeSignature = timeSignatureValue.replace("over", "/")
        } else {
            printTimeSignature = timeSignatureValue
        }

        if ((!$("input[name='genre']:checked").val()) || (!$("input[name='tempo']:checked").val()) || (!$("input[name='key']:checked").val()) || (!$("input[name='timeSignature']:checked").val())) {
            $("#printUserSelectedParameters").html("Please select at least one option per category.");
        } else {
            $("#printUserSelectedParameters").html("You have selected the following options: </br>Genre: " + printGenre + "</br>Tempo: " + printTempo + "</br>Key: " + printKey
            + "</br>Time Signature: " + printTimeSignature);
        }
    }

    showSelectedLeadSheets(genreValue, tempoValue, keyValue, timeSignatureValue) {
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

        if ($('.leadSheet:visible').length) {
            $("#printIfMusicAvailable").html("All of the lead sheets below fall within these parameters.");
        } else {
            $("#printIfMusicAvailable").html("Sorry, we couldn't find any lead sheets that fall within these parameters.") // reach out to us here if u have anything to contribute
        }

        $('input[name="genre"]').prop('checked', false);
        $('input[name="tempo"]').prop('checked', false);
        $('input[name="key"]').prop('checked', false);
        $('input[name="timeSignature"]').prop('checked', false);
    }
})
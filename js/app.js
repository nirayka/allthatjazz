$(document).ready(function(){

    $("#expandOrCollapseAll").click(function(){
        $("#printUserSelectedParameters").html("")
        if ($(".visibilityCheck").is(":visible")) {
            $(".leadSheet").hide();
        } else {
            $(".leadSheet").show();
        }
    });

    $("#getUserParameters").click(function() {
        var genreValue = $('input[name="genre"]:checked').val();
        var tempoValue = $('input[name="tempo"]:checked').val();
        var keyValue = $('input[name="key"]:checked').val();
        var timeSignatureValue = $('input[name="timeSignature"]:checked').val();

        if ((!$("input[name='genre']:checked").val()) || (!$("input[name='tempo']:checked").val()) || (!$("input[name='key']:checked").val()) || (!$("input[name='timeSignature']:checked").val())) {
            $("#printUserSelectedParameters").html("Please select at least one option per category.");
        } else {
            $("#printUserSelectedParameters").html("You have selected the following options: </br>Genre: " + genreValue + "</br>Tempo: " + tempoValue + "</br>Key: " + keyValue
            + "</br>Time Signature: " + timeSignatureValue + "</br> All of the lead sheets below fall within these parameters.");

            // ^ for this, make sure to fix time signature and key LOL

            $(".leadSheet").hide()

            var parametersString = ""
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

            $(parametersString).show()

            $('input[name="genre"]').prop('checked', false);
            $('input[name="tempo"]').prop('checked', false);
            $('input[name="key"]').prop('checked', false);
            $('input[name="timeSignature"]').prop('checked', false);

            }
    })
})
$(document).ready(function(){

    $("#expandOrCollapseAll").click(function(){
        $("#allLeadSheets").toggle();
    });

    $("#getUserParameters").click(function() {
        var genreValue = $('input[name="genre"]:checked').val();
        var tempoValue = $('input[name="tempo"]:checked').val();
        var keyValue = $('input[name="key"]:checked').val();
        if ((!$("input[name='genre']:checked").val()) || (!$("input[name='tempo']:checked").val()) || (!$("input[name='key']:checked").val())) {
            $("#demo").html("Please select at least one option per category.")
        } else {
            $("#demo").html("You have selected the following options: </br>Genre: " + genreValue + "</br>Tempo: " + tempoValue + "</br>Key: " + keyValue
            + "</br> All of the lead sheets below fall within these parameters.")
            $('input[name="genre"]').prop('checked', false);
            $('input[name="tempo"]').prop('checked', false);
            $('input[name="key"]').prop('checked', false);
        }
    })
})

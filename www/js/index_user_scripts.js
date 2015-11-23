/*jshint browser:true */
/*global $ */
(function()
 {
     "use strict";
     /*
       hook up event handlers 
     */
     function register_event_handlers()
     {
         /* button  #btnSubmit */
        $(document).on("click", "#btnSubmit", function(evt)
        {
            var server = $('#txtServer').val();
            var playerId = $('#txtPlayerId').val();
            GetPlayerProfile(server, playerId);
        });
    
    }
     document.addEventListener("app.Ready", register_event_handlers, false);
})();

function GetPlayerProfile(server, playerId){
    $.ajax({
        type: "GET",
        url: "http://naffaell.azurewebsites.net/GetPlayerService.asmx/GetPlayerProfile?server=" + server + "&playerId=" + playerId,
        dataType: "text",
        success: function (msg) {
            msg = msg.replace(/\<(.*?)\>/g, "");
            activate_page("#playerdetail");
            var playerProfile = $.parseJSON(msg);
            //$('#AjaxPlaceHolder').html(playerProfile.player_id + playerProfile.level + playerProfile.icon);
            $('#imgPlayerIcon').attr("src", playerProfile.icon);
        },
        error: function (e) {
            $('#AjaxPlaceHolder').html("Unavailable");
        }
    });
}

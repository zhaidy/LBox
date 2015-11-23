/*jshint browser:true */
/*global $ */(function()
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
    var divToBeWorkedOn = "#AjaxPlaceHolder";
    var webMethod = "http://naffaell.azurewebsites.net/GetPlayerService.asmx/HelloWorld";
    var parameters = "{'server':'" + server + "','playerId':'" + playerId + "'}";
    $.ajax({
        type: "POST",
        url: webMethod,
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(msg) {
            $(divToBeWorkedOn).html(msg.d);
            alert("success");
        },
        error: function(e){
            $(divToBeWorkedOn).html("Unavailable");
            alert("fail");
        }
    });
}

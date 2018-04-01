var progress = 0;

function startProgress()
{

    // update progress bar every 0.5 second
    setInterval(function(){
        $('#manaBar').width(progress);
        progress++;
    }, 500);
}

$(document).on("click","#manaButton",startProgress)
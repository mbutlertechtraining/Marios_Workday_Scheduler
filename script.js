$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        let value=$(this).siblings(".desc").val();
        let time=$(this).parent().attr("id");
        localStorage.setItem(time,value)
        });
        function hourUpdater(){
            let currentHour=moment().hours();
            $(".time-block").each(function(){
                let blockHour=parseInt($(this).attr("id").split(" - ")[1])
                if(blockHour<currentHour){
                    $(this).addClass("past");
                }
                else if(blockHour===currentHour){
                    $(this).removeClass("past");
                    $(this).addClass("present");  
                }
                else{
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            });
        }
        hourUpdater();
        let intervals=setInterval(hourUpdater,15000)
        $("#hour8 .desc").val(localStorage.getItem("hour8"));
        $("#hour9 .desc").val(localStorage.getItem("hour9"));
        $("#hour10 .desc").val(localStorage.getItem("hour10"));
        $("#hour11 .desc").val(localStorage.getItem("hour11"));
        $("#hour12 .desc").val(localStorage.getItem("hour12"));
        $("#hour13 .desc").val(localStorage.getItem("hour13"));
        $("#hour14 .desc").val(localStorage.getItem("hour14"));
        $("#hour15 .desc").val(localStorage.getItem("hour15"));
        $("#hour16 .desc").val(localStorage.getItem("hour16"));
        $("#hour17 .desc").val(localStorage.getItem("hour17"));
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
        });
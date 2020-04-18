$(document).ready(function(){

    $('#test').on("click",function(){
    
    chrome.tabs.query({active:true,currentWindow:true},function tabcall(Tab){
        console.log(Tab);
        
    

        function test(Tab) {
            
            console.log("hsi");
            console.log(Tab[0].id);
            let msg ={
                go:"hi"
            }

            chrome.tabs.sendMessage(Tab[0].id,msg);
        }
        test(Tab);
    });
    });
    
    
});

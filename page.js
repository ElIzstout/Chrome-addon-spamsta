$(document).ready(function(){
chrome.runtime.onMessage.addListener(mesageree);
function mesageree(request,sender,sendResponse){
    console.log(request.go);
    

}
intos = $('*')
intos.focus(
    function(event){
        console.log(event.currentTarget);
        var trig = jQuery.Event("keypress")
        trig.which =50;
        trig.keyCode =50;
        intos.val("crackhead")
     
        setTimeout(function trigges(){
            intos.trigger(trig)
            console.log(trig)
        },1000)
      
    }
)
})
//altinto = $('div[contenteditable="true"]')
altinto = $('.markup-2BOw-j slateTextArea-1Mkdgw fontSize16Padding-3Wk7zP')
console.log(altinto)
altinto.click(event,function(event){
    altinto.apend('t')
    console.log(event.currentTarget)
    console.log(altinto)

})

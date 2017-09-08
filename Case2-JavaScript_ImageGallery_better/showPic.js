function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
/*由于需要调用的函数较少，可以使用以下简单的方法：
window.onload = function(){
    countBodyChildren();
    prepareGallery();
}
 */
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
function prepareGallery() {
    //method1
    // if(!document.getElementsByTagName || !document.getElementById || !document.getElementById("imagegallery")) return false;
    /*method2
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }*/
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for( var i=0;i < links.length;i++){
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}
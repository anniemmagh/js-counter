var button = document.getElementById("btncounter");
count=0;
button.onclick=function(){
    count+=1;
    button.innerHTML='Loading:'+count;
};
if (count==5){
    button.innerHTML='Loading:Done';
}
 
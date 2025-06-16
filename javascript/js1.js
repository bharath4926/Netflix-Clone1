let username;
document.createElement("mysubmit").onclick=function(){
    username=document.getElementsById("myText").value;
    document.getElementById("myH1").textContent=`hello ${username}`;
}
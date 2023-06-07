
function newElement(){
    var li=document.createElement("li")
    var inputvalue=document.getElementById("inputtask").value;
    var x=document.createTextNode(inputvalue);
    li.appendChild(x)
    if(inputvalue == '')
    {
        alert("add a task")

    }
    else{
        document.getElementById("mylist").appendChild(li);
    }
    document.getElementById("inputtask").value='';
}
var lis=document.querySelector('ul')
lis.addEventListener('click',

function(ev) {
    if(ev.target.tagname==='LI'){
        ev.target.classlist.toggle('checked');
    }

    },false
)

// craete "close" button and append it to each list item
var mynode=document.getElementsByTagName('li');
var i;
for (i=0;1<mynode.length;i++){
var span=document.createElement("span");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
mynode(i).appendChild(span);


}
    
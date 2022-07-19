var list1 = document.getElementById("done1");
var list2 = document.getElementById("done2")
var list3 = document.getElementById("done3")
var list4 = document.getElementById("done4")
var list5 = document.getElementById("done5")
var list6 = document.getElementById("done6")
var deleteButton1 = document.getElementsByClassName("delete")[0]
var deleteButton2 = document.getElementsByClassName("delete2")[0]
var deleteButton3 = document.getElementsByClassName("delete3")[0]
var deleteButton4 = document.getElementsByClassName("delete4")[0]
var deleteButton5 = document.getElementsByClassName("delete5")[0]
var deleteButton6 = document.getElementsByClassName("delete6")[0]
var toggleit = document.querySelector(".done")
var ul = document.querySelector("ul")
var enterButton = document.getElementById("enter")
var textinput = document.getElementById("userinput")
var thisisul = document.getElementById("first");
var listItem = document.getElementsByClassName("gotthis")[0]
var listItem1 = document.getElementsByClassName("gotthis")[1]
var listItem2 = document.getElementsByClassName("gotthis")[2]
var listItem3 = document.getElementsByClassName("gotthis")[3]
var listItem4 = document.getElementsByClassName("gotthis")[4]
var listItem5 = document.getElementsByClassName("gotthis")[5]


enterButton.addEventListener("click", function(){
	if (textinput.value.length >= 3) {
		var li = document.createElement("li");
	li.appendChild(document.createTextNode(textinput.value));
	ul.appendChild(li);
		var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);
	textinput.value = ""
	}
	
});

textinput.addEventListener("keypress", function(){
	if (textinput.value.length >= 3 && event.keyCode === 13) {
		var li = document.createElement("li");
	li.appendChild(document.createTextNode(textinput.value));
	ul.appendChild(li);
		var del = document.createElement("button");
	del.appendChild(document.createTextNode("Delete"));
	li.appendChild(del);
	textinput.value = ""
	}
	
});

// textinput.addEventListener("keypress", function(event){
// 	console.log(event);
// })
listItem.addEventListener("click", function(){
	listItem.style.textDecorationLine = "line-through";
});

listItem1.addEventListener("click", function(){
	listItem1.style.textDecorationLine = "line-through";
});

listItem2.addEventListener("click", function(){
	listItem2.style.textDecorationLine = "line-through";
});

listItem3.addEventListener("click", function(){
	listItem3.style.textDecorationLine = "line-through";
});

listItem4.addEventListener("click", function(){
	listItem4.style.textDecorationLine = "line-through";
});

listItem5.addEventListener("click", function(){
	listItem5.style.textDecorationLine = "line-through";
});



deleteButton1.addEventListener("click", function(){
	list1.remove('done1');
});

deleteButton2.addEventListener("click", function(){
	list2.remove('done2');
});

deleteButton3.addEventListener("click", function(){
	list3.remove('done3');
});

deleteButton4.addEventListener("click", function(){
	list4.remove('done4');
});

deleteButton5.addEventListener("click", function(){
	list5.remove('done5');
});

deleteButton6.addEventListener("click", function(){
	list6.remove('done6');
});

// I haven't found how I can create  class and id through textinput (click & keypress functions).
// The new list items I add cant delete when the button is clicked.
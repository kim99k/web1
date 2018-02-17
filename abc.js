var Bo = {chcolor:function(color){
//document.querySelector('body').style.color=color;
$('bo').css('chcolor',color);
},
sbackcolor:function(color){ 
//document.querySelector('body').style.backgroundColor=color;
$('bo').css('sbackcolor',color);
}
} 

var links = {setcolor:function(color){ 
//var alist = document.querySelectorAll('a');
//var i = 0;
//while(i<alist.length) {
//alist[i].style.color = color;
//i = i+1; }
 $('a').css('color',color);
}
}

function daynight(self) {
var Tar=document.querySelector('body');
if(self.value ==='day') {
Bo.sbackcolor('white');
Bo.chcolor ('black');
self.value ='night'; 
links.setcolor ('red');
}
else { 
Bo.sbackcolor('black');
Bo.chcolor('white');
self.value='day'; 
links.setcolor('powderblue'); 
}
} var Bo = {chcolor:function(color){
document.querySelector('body').style.color=color;},
sbackcolor:function(color){ 
document.querySelector('body').style.backgroundColor=color;}
} 

var links = {setcolor:function(color){ 
var alist = document.querySelectorAll('a');
var i = 0;
while(i<alist.length) {
alist[i].style.color = color;
i = i+1; }
}
}

function daynight(self) {
var Tar=document.querySelector('body');
if(self.value ==='day') {
Bo.sbackcolor('white');
Bo.chcolor ('black');
self.value ='night'; 
links.setcolor ('red');
}
else { 
Bo.sbackcolor('black');
Bo.chcolor('white');
self.value='day'; 
links.setcolor('powderblue'); 
}
}// JavaScript Document
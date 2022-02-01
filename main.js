var images = ["Monkey_03.png","Monkey_04.png","Monkey_02.png"];
var i = 0;
function walk()
{
    document.getElementById("walk").src=images[i];
    i++;

if(i == 3)
{
    i = 0;
}
}
var myObj, i, x = "";
myObj = {
  "name":"Noah",
  "age":30,
  "cars":[ "Ford", "BMW", "Fiat" ]
};

for (i in myObj.cars) {
   x += myObj.cars[i] + " ";
}
document.getElementById("demo").innerHTML = "Hobbies: " +x;

document.getElementById("name").innerHTML = "My name is: " + myObj.name;

var myObj, i, x = "";
CurrentInfo = {
  "name":"Noah",
  "workplace":"Viral Media",
  "position":"Parter",
  "livecity":"Randers",
  "livecountry":"Denmark",
  "hobbies":[ "Hacking", "IoT", "Travling"],
  "email":"noah@noahbohme.com",
  "phone":"+45 81907150"
};

for (i in CurrentInfo.hobbies) {
   x += CurrentInfo.hobbies[i] + " ";
}
document.getElementById("name").innerHTML = "My name is: " + CurrentInfo.name;
document.getElementById("workplace").innerHTML = CurrentInfo.position + " @ " + CurrentInfo.workplace;
document.getElementById("liveplace").innerHTML = "I live in : " + CurrentInfo.livecity + ", " + CurrentInfo.livecountry;
document.getElementById("hobbies").innerHTML = "Hobbies: " +x;
document.getElementById("email").innerHTML = "My email is: " + CurrentInfo.email;
document.getElementById("name").innerHTML = "My phonenumber: " + CurrentInfo.phone;

Bucketlist = {
  "countries":[ "Russia ", "Spain ", "Philipines ", "Malaysia ", "Thailand ", "Turkey ", "Greek ", "USA ", "Greenland ", "North Korea ", "UAE "],
  "things":[ "Fly a helicoptor ", "Turnover 1 million DKK ", "Drink coffee with Mark Zuckerberg ", "Drink coffee with Elon Musk ", "Sell a company ", "Buy a company ", "Live as a nomade ", "Buy an apartment ", "Parachute ", "Fly first-class "],
  "food":[ "Fresh Coconut ", "A steak by Salt Bae ", "A meal by Gorden Ramsey "]
};


document.getElementById("ContriesBL").innerHTML = Bucketlist.countries;
document.getElementById("ThingsBL").innerHTML = Bucketlist.things;
document.getElementById("FoodBL").innerHTML = Bucketlist.food;



// var litNotOne = {city:"San Francisco", population:800000, flower: "Dahlia", img:url("https://wallpaperscraft.com/image/san_francisco_top_view_panorama_night_building_63107_3840x2400.jpg")}
// var litNotTwo = {}





function city(name, population, hippies, flower, image) {
    this.name = name;
    this.population = population;
    this.hippies = hippies;
    this.flower = flower;
    this.image = image;
    // this.productOfPop = function() {
    //   return this.population * this.hippies
    //   }
  }
var cityArray = new Array

var sanFran = new city("San Francisco", 800000, 200000,"Dahlia", "img/sanfrancisco.jpg");
var porTlan = new city("Portland", 600000, 450000, "Rose", "img/portland.jpg");
var detRoit = new city("Detroit", 700000, 1000,"Tulip", "img/detroit.jpg");
var newYork = new city("New York", 10000000, 30000000, 'Rose', 'img/newyork.jpg');

cityArray.push(sanFran, porTlan, detRoit, newYork)


for(i = 0; i < cityArray.length; i++) {
    var cityName = document.createTextNode(cityArray[i].name)
    var cityPop = document.createTextNode("Current Population: " + cityArray[i].population)
    var cityHippies = document.createTextNode("Current Hippy Population: " + cityArray[i].hippies)
    var cityFlower = document.createTextNode("City Flower: " + cityArray[i].flower)
    var cityImg = cityArray[i].image

      var newCol2 = document.createElement('div');
    var newCol = document.createElement('div');
    var newDiv = document.createElement('div');
      var newDiv2 = document.createElement('div');
    var h1name = document.createElement('h1');
    var h4pop = document.createElement('h4');
    var h4hippy = document.createElement('h4');
    var h4flower = document.createElement('h4');
    var visit = document.createElement('button');
    var image = document.createElement('img');

    h1name.appendChild(cityName)
    h4pop.appendChild(cityPop)
    h4hippy.appendChild(cityHippies)
    h4flower.appendChild(cityFlower)
    image.src = cityImg
    image.className = "img-responsive"

    newCol2.className = "row"
    newCol.className = "col-md-6"
    newDiv.className = "usCity cityName" + " thumbnail"
    newDiv.appendChild(h1name)
    newDiv.appendChild(image)
    newDiv.appendChild(h4pop)
    newDiv.appendChild(h4hippy)
    newDiv.appendChild(h4flower)
    newCol.appendChild(newDiv)
    newCol2.appendChild(newDiv2)



    document.getElementById("cities").appendChild(newCol)

}



// var newImg = document.createElement('img')
// newImg.src(this.img)
//
// for(i = 0; i < city.length; i++) {
//     document
// }

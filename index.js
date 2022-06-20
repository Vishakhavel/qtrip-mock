var locationData = [
  {
    destination: 'Singapore',
    places: 120,
    image: 'images/cities/singapore.jpeg',
  },
  {
    destination: 'Paris',
    places: 50,
    image: 'images/cities/paris.jpeg',
    price: 70000,
  },
  { destination: 'New York', places: 533, image: 'images/cities/newyork.webp' },
  {
    destination: 'Bangalore',
    places: 50,
    image: 'images/cities/bangalore.webp',
    price: 70000,
  },
  {
    destination: 'Malaysia',
    places: 50,
    image: 'images/cities/malaysia.jpeg',
    price: 70000,
  },
  {
    destination: 'Goa',
    places: 50,
    image: 'images/cities/Goa.jpeg',
    price: 70000,
  },
  {
    destination: 'Kolkata',
    places: 50,
    image: 'images/cities/kolkata.jpeg',
    price: 70000,
  },
  {
    destination: 'Bangkok',
    places: 50,
    image: 'images/cities/bangkok.jpg',
    price: 70000,
  },
]

var locationCardTemplate = document.querySelector('#template')

var locationCardContainer = document.querySelector('#location-card-container')
if (typeof card == undefined) {
  console.log('content undefined')
} else {
  // console.log(card)

  locationData.forEach((locationItem) => {
    console.log('location item', locationItem)
    // logic
    const card = locationCardTemplate.content.cloneNode(true)

    const city = card.querySelector('#city-name')
    const places = card.querySelector('#places')
    city.textContent = locationItem.destination
    places.textContent = locationItem.places + '+ places'

    const galleryImageTile = card.querySelector('#city-picture')
    // console.log(city)
    // console.log(places)
    console.log(galleryImageTile)
    galleryImageTile.src = locationItem.image
    locationCardContainer.append(card)
  })
} // end of else

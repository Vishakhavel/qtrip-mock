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
  {
    destination: 'Kerela',
    places: 50,
    image: 'images/cities/kerela.jpg',
    price: 70000,
  },
  {
    destination: 'London',
    places: 50,
    image: 'images/cities/london.jpg',
    price: 70000,
  },
  {
    destination: 'Amsterdam',
    places: 50,
    image: 'images/cities/amsterdam.jpg',
    price: 70000,
  },
  {
    destination: 'Madrid',
    places: 50,
    image: 'images/cities/madrid.jpg',
    price: 70000,
  },
  {
    destination: 'Rameshwaram',
    places: 50,
    image: 'images/cities/rameshwaram.jpg',
    price: 70000,
  },
  {
    destination: 'Coorg',
    places: 50,
    image: 'images/cities/coorg.jpg',
    price: 70000,
  },
  {
    destination: 'Delhi',
    places: 50,
    image: 'images/cities/delhi.jpg',
    price: 70000,
  },
  {
    destination: 'Mumbai',
    places: 50,
    image: 'images/cities/mumbai.jpg',
    price: 70000,
  },
]
// selecting the template
var locationCardTemplate = document.querySelector('#template')
// selecting the container
var locationCardContainer = document.querySelector('#location-card-container')
// selecting input search bar
var searchInput = document.querySelector('#search')

let locations = []
// state variable

searchInput.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase()
  // console.log(locations)
  locations.forEach((location) => {
    const isVisible = location.destination.toLowerCase().startsWith(value)

    // console.log(location.element)
    location.element.classList.toggle('hide', !isVisible)

    // if (isVisible) {
    //   // console.log(location.destination + 'START WITH' + value)
    //   // console.log(location.element)
    //   // console.log(location.element.classList + ' before')
    //   location.element.classList.toggle('hide', !isVisible)
    //   // console.log(location.element.classList + ' after')
    // } else {
    //   console.log('ELEMENTS WHICH DONT CONTAIN INPUT')
    //   console.log(location.destination)
    //   console.log(location.element.classList)
    // }
    // console.log(isVisible + ' ' + location.destination)

    // console.log(location.element.classList)
  })
})

if (typeof card == undefined) {
  console.log('content undefined')
} else {
  // console.log(card)

  locations = locationData.map((locationItem) => {
    // console.log('location item', locationItem)
    // logic
    const card = locationCardTemplate.content.cloneNode(true).children[0]

    // console.log(card)

    // console.log(card.children[0])

    const city = card.querySelector('#city-name')
    const places = card.querySelector('#places')
    city.textContent = locationItem.destination
    places.textContent = locationItem.places + '+ places'

    const galleryImageTile = card.querySelector('#city-picture')
    // console.log(city)
    // console.log(places)
    // console.log(galleryImageTile)
    galleryImageTile.src = locationItem.image
    locationCardContainer.append(card)

    // console.log(card)

    return {
      destination: locationItem.destination,
      element: card,
    }
  })
} // end of else

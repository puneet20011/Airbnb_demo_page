# Basic Example Loading Airbnb Listings

A simple demonstration of how to load and display Airbnb listing data using vanilla JavaScript. Perfect for learning basic web development concepts like fetching JSON data and DOM manipulation.

## What This Project Does

This is a straightforward example that shows you how to:
- Load JSON data containing Airbnb listings
- Display listings dynamically on a webpage
- Handle form inputs with JavaScript
- Build a responsive layout with Bootstrap

## Quick Start

1. **Clone or download this project**

2. **Open `index.html` in your browser**
   - Just double-click the file, or
   - Use a local server: `python3 -m http.server 8000`

That's it! You should see the Airbnb listings interface.

## Project Files

```
├── index.html                      # Main page
├── about.html                      # About page
├── airbnb_sf_listings_500.json    # 500 SF Airbnb listings data
├── js/main.js                      # JavaScript code
└── css/main.css                    # Custom styles
```

## The Data

The `airbnb_sf_listings_500.json` file contains 500 real Airbnb listings from San Francisco with information like:

```json
{
  "id": 958,
  "name": "Serviced apartment in San Francisco",
  "host_name": "Holly",
  "price": "$187.00",
  "picture_url": "https://...",
  "description": "...",
  "bedrooms": 1,
  "beds": 2,
  "accommodates": 3
}
```

## How to Load the Listings

Here's the basic approach to load and display the listings:

```javascript
// 1. Fetch the JSON data
fetch('./airbnb_sf_listings_500.json')
  .then(response => response.json())
  .then(listings => {
    // 2. Loop through each listing
    listings.forEach(listing => {
      // 3. Create HTML for each listing
      const listingCard = createListingCard(listing);
      
      // 4. Add it to the page
      document.querySelector('.listings').appendChild(listingCard);
    });
  });

// Helper function to create a listing card
function createListingCard(listing) {
  const card = document.createElement('div');
  card.className = 'col-6';
  card.innerHTML = `
    <article class="card h-100">
      <img src="${listing.picture_url}" class="card-img-top" alt="${listing.name}">
      <div class="card-body">
        <h3 class="card-title fs-5">${listing.name}</h3>
        <p><strong>Host:</strong> ${listing.host_name}</p>
        <p class="price text-primary fw-bold">${listing.price}</p>
      </div>
    </article>
  `;
  return card;
}
```

## Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling
- **JavaScript** - Loading and displaying data
- **Bootstrap 5** - Responsive layout
- **JSON** - Data format

## Development (Optional)

If you want to use the linting and formatting tools:

```bash
npm install          # Install dependencies
npx eslint js/       # Check code quality
npx prettier --write "**/*.{js,html,css}"  # Format code
```

## Next Steps

Ideas to extend this example:
- [ ] Actually implement the fetch logic to load all listings
- [ ] Add search/filter functionality
- [ ] Sort by price or rating
- [ ] Add pagination
- [ ] Save favorite listings to localStorage

## Author

Puneet Singh Puri

## License

MIT License - feel free to use this for learning!

---

**Note**: This is a learning project demonstrating basic JavaScript concepts. The dataset is from publicly available Airbnb data.


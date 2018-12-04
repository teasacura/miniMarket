const faker = require('faker');


module.exports = () => {
  const data = { items: [] }
  for (let i = 1; i < 4; i++) {
    data.items.push({ id: i, title: faker.commerce.productName(), price: faker.commerce.price(), description: faker.commerce.productAdjective(), imageUrl: "https://images.pexels.com/photos/1454994/pexels-photo-1454994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", department: faker.commerce.department()})
  }
  return data
}


// {
//   "items": [
//     {
//       "id": 1,
//       "imageUrl": "https://burst.shopify.com/photos/pretty-gold-necklace",
//       "title": "Pretty Gold Necklace",
//       "owner": "Alexandra Lee",
//       "price": "$29.99",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt orci sit amet massa placerat euismod. Donec id maximus ipsum, non consequat leo. Morbi tempus, sapien et finibus convallis, libero magna dictum ipsum, ac commodo nibh ante quis nisl. Curabitur elementum scelerisque diam, non lobortis purus ornare non.",
//       "category": "Jewelry"
//     },
//     {
//       "id": 2,
//       "imageUrl": "https://burst.shopify.com/photos/galaxy-earrings",
//       "title": "Galaxy Earrings",
//       "owner": "Alexandra Lee",
//       "price": "$9.99",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt orci sit amet massa placerat euismod. Donec id maximus ipsum, non consequat leo. Morbi tempus, sapien et finibus convallis, libero magna dictum ipsum, ac commodo nibh ante quis nisl. Curabitur elementum scelerisque diam, non lobortis purus ornare non.",
//       "category": "Jewelry"
//     },
//     {
//       "id": 3,
//       "imageUrl": "https://burst.shopify.com/photos/gemstone-necklace",
//       "title": "Gemstone Necklace",
//       "owner": "Alexandra Lee",
//       "price": "$34.99",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt orci sit amet massa placerat euismod. Donec id maximus ipsum, non consequat leo. Morbi tempus, sapien et finibus convallis, libero magna dictum ipsum, ac commodo nibh ante quis nisl. Curabitur elementum scelerisque diam, non lobortis purus ornare non.",
//       "category": "Jewelry"
//     }
//   ]
// }

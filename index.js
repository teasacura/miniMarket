const myMarket = {
  init: function(settings) {
    myMarket.config = {
      items: [],
      container: $("<div class='item-card'></div>"),
      urlBase: "http://localhost:3000/items"
    };

    myMarket.setup();
  },

  setup: async function() {
    const result = await $.get(myMarket.config.urlBase, function(data) {
        myMarket.config.items = data;
      return data;
    });

    myMarket.config.items
      .forEach( myMarket.createContainer )
  },

  createContainer: function(item) {
    let parent = $("#myMarket");
    let card = $(`
      <div class="inner-card">
        <img src="${item.imageUrl}"/>
        <h3>${item.title}</h3>
        <h4>${item.price}</h4>
        <button>See More</button>
      </div>
    `)
    let container = myMarket.config.container
      .clone()
      .append(card)
      .click( myMarket.showItem )
      .appendTo(parent)
      card.data('container', container)
  },

  showItem: function () {
    myMarket.currentItem = $(this);
    console.log(myMarket.currentItem)
  }
}

$(document).ready( myMarket.init );

// https://www.istockphoto.com/photo/bernese-mountain-dog-puppy-gm182381149-11468224

// $(document).ready(function() {
//
//   const ITEMS_URL = "http://localhost:3000/items";
//
//   $.get(ITEMS_URL, renderItems)
// });
//
// function renderItems(items) {
//   let market = new
//   // items.map(item => buildItemCard(item));
// }
//
// function buildItemCard(item) {
//   let itemDiv = $('<div class="item-card"></div>');
//   let itemImg = $(`<img class="item-image" src="${item.imageUrl}" alt="${item.title}"/>`)
// }

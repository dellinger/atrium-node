define({ "api": [
  {
    "type": "post",
    "url": "/items",
    "title": "Create an Item",
    "name": "createItem",
    "group": "Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "item",
            "description": "<p>List of items.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.price",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/item_route.js",
    "groupTitle": "Item",
    "sampleRequest": [
      {
        "url": "localhost:3000/items"
      }
    ]
  },
  {
    "type": "get",
    "url": "/items",
    "title": "Retrieve all items",
    "name": "getItems",
    "group": "Item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "item",
            "description": "<p>List of items.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "item.price",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n name : 'Gameboy',\n price : 50.99\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/item_route.js",
    "groupTitle": "Item",
    "sampleRequest": [
      {
        "url": "localhost:3000/items"
      }
    ]
  }
] });
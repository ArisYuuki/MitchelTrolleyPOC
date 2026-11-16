// foodDb.js
// In-memory "mock database" built as a singleton, so the whole app
// shares one list of food items.

class FoodDatabase {
  constructor() {
    // Five food items, each with a price
    this.foods = [
      { id: 1, name: 'Apple', price: 1.25 },
      { id: 2, name: 'Bread', price: 3.5 },
      { id: 3, name: 'Cheese', price: 5.99 },
      { id: 4, name: 'Eggs', price: 4.25 },
      { id: 5, name: 'Milk', price: 3.89 }
    ];
  }

  // Always returns the same instance (creates it the first time)
  static getInstance() {
    if (!FoodDatabase.instance) {
      FoodDatabase.instance = new FoodDatabase();
    }
    return FoodDatabase.instance;
  }

  // Returns all food items
  getAll() {
    return this.foods;
  }
}

module.exports = FoodDatabase;

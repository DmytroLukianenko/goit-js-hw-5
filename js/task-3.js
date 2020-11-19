class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return [this.items];
  }
  addItem(items) {
    storage.items.push(items);
  }
  removeItem(items) {
    storage.items = storage.items.filter((item) => item !== items);
  }
}
const storage = new Storage(["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Setup: cafeDB.orders
use cafeDB

// start clean so the script can be re-run
db.orders.drop()

db.orders.insertMany([
  { _id: 1, customer: "Meena",   item: "Coffee",   qty: 2, price: 120, status: "delivered" },
  { _id: 2, customer: "Ravi",    item: "Sandwich", qty: 1, price: 180, status: "delivered" },
  { _id: 3, customer: "Meena",   item: "Sandwich", qty: 2, price: 180, status: "cancelled" },
  { _id: 4, customer: "Karthik", item: "Coffee",   qty: 3, price: 120, status: "delivered" },
  { _id: 5, customer: "Ravi",    item: "Coffee",   qty: 1, price: 120, status: "delivered" },
  { _id: 6, customer: "Meena",   item: "Cake",     qty: 1, price: 250, status: "delivered" },
  { _id: 7, customer: "Karthik", item: "Cake",     qty: 2, price: 250, status: "pending" }
])

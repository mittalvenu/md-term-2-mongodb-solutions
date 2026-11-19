// Task 5: Delete one matching document
use libraryDB

db.books.deleteOne({ title: "Old Almanac 1990" })

// Expected output:
// { acknowledged: true, deletedCount: 1 }

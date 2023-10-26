// database.js
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mydb");

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, value TEXT);",
        );
      },
      (err) => {
        console.error("Failed to create table:", err);
        reject(err);
      },
      () => {
        console.log("Database setup successfully!");
        resolve();
      },
    );
  });
};

// CREATE
const insertItem = (name, value) => {
  db.transaction((tx) => {
    tx.executeSql("INSERT INTO items (name, value) VALUES (?, ?);", [
      name,
      value,
    ]);
  });
};

// READ
const fetchItems = (callback) => {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM items;", [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

// UPDATE
const updateItem = (id, name, value) => {
  db.transaction((tx) => {
    tx.executeSql("UPDATE items SET name = ?, value = ? WHERE id = ?;", [
      name,
      value,
      id,
    ]);
  });
};

// DELETE
const deleteItem = (id) => {
  db.transaction((tx) => {
    tx.executeSql("DELETE FROM items WHERE id = ?;", [id]);
  });
};

export { setupDatabaseAsync, insertItem, fetchItems, updateItem, deleteItem };

// to run postgres locally, you can use docker
// docker pull postgres
// docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5431:5431 -d postgres
//
// otherwise use the sqlite provided in the repo

package main

import (
	"database/sql"
	"log"

	_ "github.com/mattn/go-sqlite3"
)

// add driver here
func main() {
	log.Println("starting....")
	// Open a connection to the SQLite database
	db, err := sql.Open("sqlite3", "sqlite.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Ping the database to verify the connection
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	// Create a table
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE, password TEXT NOT NULL)")
	if err != nil {
		log.Fatal(err)
	}

	// Insert a new user
	_, err = db.Exec("INSERT INTO users (name, email, password) VALUES ('John Doe', ' john.doe@email.com', 'opensesame') ON CONFLICT(email) DO NOTHING;")
	if err != nil {
		log.Fatal(err)
	}

	// Query the database
	rows, err := db.Query(`SELECT id, name, email FROM users`)
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	for rows.Next() {
		var id int
		var name string
		var email string
		err = rows.Scan(&id, &name, &email)
		if err != nil {
			log.Fatal(err)
		}
		log.Println(id, name, email)
	}

	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}
}

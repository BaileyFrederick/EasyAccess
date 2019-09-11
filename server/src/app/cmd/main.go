package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {

	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Database connected successfully")
	}
	defer db.Close()

	_, err = db.Exec("CREATE DATABASE IF NOT EXISTS EasyAccess")

	_, err = db.Exec("USE EasyAccess")
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("DB selected successfully..")
	}

	stmt, err := db.Prepare("CREATE Table IF NOT EXISTS users(id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, first_name varchar(50), last_name varchar(30));")
	if err != nil {
		fmt.Println(err.Error())
	}

	_, err = stmt.Exec()
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Table created successfully..")
	}

	inst, err := db.Prepare("INSERT INTO users (first_name, last_name) VALUES ('Bailey','Frederick')")
	if err != nil {
		fmt.Println(err.Error())
	}

	_, err = inst.Exec()
	if err != nil {
		fmt.Println(err.Error())
	} else {
		fmt.Println("Row created successfully..")
	}
}

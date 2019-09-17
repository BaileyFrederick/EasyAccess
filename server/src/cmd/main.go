package main

import (
	"context"
	"log"

	firebase "firebase.google.com/go"
	"github.com/joho/godotenv"
)

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {

	ctx := context.Background()

	//creates new firebase app connection based on GOOGLE_APPLICATION_CREDENTIALS in .env file
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	//creates connection to Firestore database
	client, err := app.Firestore(context.Background())
	if err != nil {
		log.Fatalln(err)
	}
	//closes client when code finishes
	defer client.Close()

	p := Person{
		Name: "Alice",
	}
	//Changes the name of the specific user based on UID to ALICE
	_, err = client.Collection("users").Doc("755O4T422rS1CgngVpI8").Set(ctx, p)
	if err != nil {
		log.Fatal(err)
	}
}

type Person struct {
	Name string
}

package main

import (
	"context"
	"log"

	firebase "firebase.google.com/go"
	"github.com/joho/godotenv"
)

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(".env"); err != nil {
		log.Print("No .env file found")
	}
}

func main() {
	print("GOPATH set up correctly amd project is working")
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
	auth, err := app.Auth(ctx)
	params := (&auth.UserToCreate{}).
		Email("user@example.com").
		EmailVerified(false).
		PhoneNumber("+1234567890").
		Password("secretPassword").
		DisplayName("Donald Drump").
		PhotoURL("http://www.example.com/12345678/photo.png").
		Disabled(false)

	u, err := client.CreateUser(ctx, params)
	if err != nil {
		log.Fatalf("error creating user: %v\n", err)
	}
	log.Printf("Successfully created user: %v\n", u)
	p := Person{
		Name: "Alice",
	}
	//Changes the name of the specific user based on UID to ALICE
	_, err = client.Collection("users").Doc("755O4T422rS1CgngVpI8").Set(ctx, p)
	if err != nil {
		log.Fatal(err)
	}
}

type User struct {
	Name string
}

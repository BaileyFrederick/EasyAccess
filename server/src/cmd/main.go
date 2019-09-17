package main

import (
	"context"
	"fmt"
	"log"

	firebase "firebase.google.com/go"
	"github.com/joho/godotenv"
	"google.golang.org/api/option"
)

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {

	// key, EXISTS := os.LookupEnv("KEY")
	// if EXISTS {
	// 	print(key)
	// }
	opt := option.WithCredentialsFile("./serviceAccountKey.json")
	_, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		print(fmt.Errorf("error initializing app: %v", err))
	}
}

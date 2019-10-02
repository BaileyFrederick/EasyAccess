package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	firebase "firebase.google.com/go"
)

type Message struct {
	UID string `json:"uid"`
}

func (h *Handler) authUser(w http.ResponseWriter, r *http.Request) {
	ProjectId := os.Getenv("ProjectID")
	fmt.Println("Test GET endpoint is being hit now!")
	ctx := context.Background()

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	var msg Message
	err = json.Unmarshal(body, &msg)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	log.Println(msg)

	conf := &firebase.Config{ProjectID: ProjectId}
	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		log.Fatalln(err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer client.Close()

	auth, err := app.Auth(ctx)
	userRecord, err := auth.GetUser(ctx, msg.UID)
	// var idToken string

	// token, err := client.VerifyIDTokenAndCheckRevoked(ctx, idToken)
	// if err != nil {
	// 	log.Fatalf("error verifying ID token: %v\n", err)
	// }
	// user, err := client.GetUser(ctx, token.UID)
	output, err := json.Marshal(userRecord)
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	w.Header().Set("content-type", "application/json")
	w.Write(output)
	return
}

func (h *Handler) userInfo(w http.ResponseWriter, r *http.Request) {
	log.Println("Info Endpoint")

}

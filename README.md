# EasyAccess

welcome to our EasyAccess repo!!

# To start the react app

run in client directory

```bash
npm start
```

# To start go server

run in server/src/cmd directory

```bash
cd server/src/cmd
go run main.go
```

Once your terminal says "INFO[0001] listening on port 3000" you're good


# Http Requests
```bash
/user - POST request.body(idToken from firebase.auth.signinwithEmailandPasword)
```

# structs
```bash
type student struct {
	UID            string   `json:"uid"`
	Name           string   `json:"name"`
	Email          string   `json:"email"`
	SchoolCode     string   `json:"schoolCode"`
	GraduationYear string   `json:"graduationYear"`
	WeightedGPA    float32  `json:"weightedGpa"`
	UnweightedGPA  float32  `json:"unweightedGpa"`
	ClassRank      int      `json:"classRank"`
	SAT            int      `json:"SAT"`
	ACT            int      `json:"ACT"`
	Size           string   `json:"size"`
	Location       string   `json:"location"`
	Diversity      string   `json:"diversity"`
	Majors         []string `json:"majors"`
	Distance       string   `json:"distance"`
	Zip            string   `json:"zip"`
	Matches        []string `json:"matches"`
}
```

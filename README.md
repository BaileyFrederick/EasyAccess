# EasyAccess

welcome to our EasyAccess repo!!
To start the react app
run "npm start" in client directory

To start go server
run "go run main.go" in server/src/cmd directory


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

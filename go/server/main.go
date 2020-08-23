package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Task struct {
	Id      string `json:"id"`
	Title   string `json:"title"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
}

var Tasks []Task

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to home page!")
	fmt.Println("Endpoint reached: Home Page")
}

func returnAllTasks(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint reached: /tasks")

	json.NewEncoder(w).Encode(Tasks)
}

func returnATask(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	for _, task := range Tasks {
		if task.Id == key {

			json.NewEncoder(w).Encode(task)
		}
	}
}

func createNewTask(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)

	var task Task
	json.Unmarshal(reqBody, &task)
	Tasks = append(Tasks, task)

	json.NewEncoder(w).Encode(task)
}

func deleteTask(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]

	for index, v := range Tasks {
		if v.Id == key {
			Tasks = append(Tasks[:index], Tasks[index+1:]...)
		}
	}

	json.NewEncoder(w).Encode(Tasks)
}

func updateTask(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	key := vars["id"]
	reqBody, _ := ioutil.ReadAll(r.Body)

	for index, v := range Tasks {
		if v.Id == key {
			var task Task

			json.Unmarshal(reqBody, &task)

			Tasks = append(Tasks[:index], Tasks[index+1:]...)
			Tasks = append(Tasks, task)
		}
	}

	json.NewEncoder(w).Encode(Tasks)
}

func handleRequest() {

	myRouter := mux.NewRouter()
	myRouter.Methods("OPTIONS").HandlerFunc(func(w http.ResponseWriter, r *http.Request){
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, Access-Control-Request-Headers, Access-Control-Request-Method, Connection, Host, Origin, User-Agent, Referer, Cache-Control, X-header")
		w.WriteHeader(http.StatusNoContent)
		return
	})

	myRouter.StrictSlash(true)

	// GET
	myRouter.HandleFunc("/", homePage)
	myRouter.HandleFunc("/all", returnAllTasks)
	myRouter.HandleFunc("/task/{id}", returnATask).Methods("GET")
	myRouter.HandleFunc("/task", createNewTask).Methods("POST")
	myRouter.HandleFunc("/task/{id}", deleteTask).Methods("DELETE")
	myRouter.HandleFunc("/update/{id}", updateTask).Methods("PUT")

	log.Fatal(http.ListenAndServe(":8000", myRouter))
}

func main() {

	Tasks = []Task{
		Task{Id: "1", Title: "1st title", Desc: "1st desc", Content: "Content of first task"},
		Task{Id: "2", Title: "2nd title", Desc: "2nd desc", Content: "Content of second task"},
	}

	handleRequest()
}

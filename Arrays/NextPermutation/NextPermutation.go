package main

import "fmt"

// func permutation(ques string, ans string, list []string) []string {
// 	if len(ques) == 0 {
// 		fmt.Println("ans is ", ans)
// 		list = append(list, ans)
// 	}

// 	for i, c := range ques {
// 		permutation(ques[0:i]+ques[i+1:len(ques)], ans+string(c), list)
// 	}
// 	return list
// }

func temp(list []string) {
	list = append(list, "abc")
	fmt.Println("Inside temp, list is ", list)
}
func main() {
	// ques := "1234"
	// list := permutation(ques, "", []string{})
	// fmt.Println(list)
	tempList := []string{}
	temp(tempList)
	fmt.Println("Inside main, tempList is ", tempList)
}

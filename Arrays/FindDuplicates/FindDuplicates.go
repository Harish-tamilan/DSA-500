package main

import "fmt"

func method1(arr []int) int {
	var i int
	var j int
	for i = 0; i < len(arr); i++ {
		for j = i + 1; j < len(arr); j++ {
			if arr[i] == arr[j] {
				return arr[i]
			}
		}
	}
	return 0
}

func method2(arr []int) int {
	slow := 0
	fast := 0
	for {
		slow = arr[slow]
		fast = arr[arr[fast]]
		if slow == fast {
			break
		}
	}
	slow = 0
	for slow != fast {
		slow = arr[slow]
		fast = arr[fast]
	}
	return slow
}

func main() {
	arr := []int{1, 2, 3, 4, 1}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

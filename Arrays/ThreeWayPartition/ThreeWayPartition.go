package main

import "fmt"

func method1(arr []int, a int, b int) {
	var i int
	var temp int
	n := len(arr)
	end := n - 1
	start := 0
	for i = 0; i <= end; {
		if arr[i] > b {
			temp = arr[i]
			arr[i] = arr[end]
			arr[end] = temp
			end--
		} else if arr[i] < a {
			temp = arr[i]
			arr[i] = arr[start]
			arr[start] = temp
			start++
			i++
		} else {
			i++
		}
	}
}

func main() {
	arr := []int{1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32}
	a, b := 10, 20
	method1(arr, a, b)
	fmt.Println(arr)
}

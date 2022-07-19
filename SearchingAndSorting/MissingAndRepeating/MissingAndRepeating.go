package main

import (
	"fmt"
)

func method1(arr []int) []int {
	n := len(arr) - 1
	for i := 0; i <= n; {
		if arr[i] == i+1 || arr[i] > n || arr[i] == arr[arr[i]-1] {
			i++
		} else {
			temp := arr[arr[i]-1]
			arr[arr[i]-1] = arr[i]
			arr[i] = temp
		}
	}
	res := []int{-1, -1}
	for i := 0; i <= n; i++ {
		if arr[i] != i+1 {
			res[0] = i + 1
			res[1] = arr[i]
			return res
		}
	}
	return res
}

func main() {
	arr := []int{1, 2, 4}
	fmt.Println(method1(arr))
}

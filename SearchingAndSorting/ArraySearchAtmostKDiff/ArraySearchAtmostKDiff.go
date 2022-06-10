package main

import (
	"fmt"
	"math"
)

func method1(arr []int, k int, x int) int {
	n := len(arr)
	for i := 0; i < n; {
		if arr[i] == x {
			return i
		}
		diff := int(math.Abs(float64(x - arr[i])))
		ind := diff / k
		if ind == 0 {
			i++
		} else {
			i += ind
		}
	}
	return -1
}

func main() {
	arr := []int{4, 5, 6, 7, 6}
	k := 1
	x := 6
	fmt.Println(method1(arr, k, x))
}

package main

import "fmt"

func largestSumContious(arr []int) int {
	sum := arr[0]
	temp := arr[0]
	n := len(arr)
	for i := 1; i < n; i++ {
		if temp+arr[i] < 0 {
			temp = 0
			if arr[i] > sum {
				sum = arr[i]
			}
		} else {
			temp += arr[i]
			if temp > sum {
				sum = temp
			}
		}
	}
	return sum
}

func main() {
	arr := []int{-1, -2, -3, -4}
	fmt.Println(largestSumContious(arr))
}

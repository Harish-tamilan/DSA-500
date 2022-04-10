package main

import (
	"fmt"
)

func bestTimeToBuySellStock(arr []int) int {
	var i int
	var j int
	max := 0
	n := len(arr)
	var temp int

	for i = 0; i < n; i++ {
		for j = i + 1; j < n; j++ {
			temp = arr[j] - arr[i]
			if temp > max {
				max = temp
			}
		}
	}
	return max
}

func bestTimeToBuySellStock2(arr []int) int {
	var i int
	var j int
	max := 0
	n := len(arr)
	for j < n {
		if arr[j] < arr[i] {
			i = j
		} else {
			if arr[j]-arr[i] > max {
				max = arr[j] - arr[i]
			}
		}
		j++
	}
	return max
}
func main() {
	arr := []int{7, 1, 5, 3, 6, 4}
	fmt.Println(bestTimeToBuySellStock(arr))
	fmt.Println(bestTimeToBuySellStock2(arr))
}

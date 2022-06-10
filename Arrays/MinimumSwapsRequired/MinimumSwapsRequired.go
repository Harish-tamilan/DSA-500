package main

import "fmt"

func minimumSwapsRequired(arr []int, k int) int {
	count := 0
	temp := 0
	var i int
	var j int
	n := len(arr)
	for i = 0; i < n; i++ {
		if arr[i] <= k {
			count++
		}
	}
	for i = 0; i < count; i++ {
		if arr[i] > k {
			temp++
		}
	}
	i = 1
	swaps := temp
	for j = count; j < n; j++ {
		if arr[i-1] <= k {
			temp++
		}
		if arr[j] <= k {
			temp--
		}
		if temp < swaps {
			swaps = temp
		}
		i++
	}
	return swaps
}

func main() {
	arr := []int{2, 1, 5, 6, 3}
	k := 3
	fmt.Println(minimumSwapsRequired(arr, k))
}

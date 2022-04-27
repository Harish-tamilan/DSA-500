package main

import "fmt"

func countInversion(arr []int) int {
	count := 0
	n := len(arr)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if arr[i] > arr[j] {
				temp := arr[i]
				arr[i] = arr[j]
				arr[j] = temp
				count++
			}
		}
	}
	return count
}

func main() {
	arr := []int{7, 2, 4, 9, 3, 5}
	fmt.Println(countInversion(arr))
}

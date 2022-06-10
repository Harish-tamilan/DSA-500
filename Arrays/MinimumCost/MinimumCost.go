package main

import "fmt"

func minimumCost(arr []int) int {
	count := 1
	n := len(arr)
	if n <= 1 {
		return 0
	}
	if arr[0] == 0 {
		return -1
	}
	steps := arr[0]
	maxIndex := arr[0]
	for i := 1; i < n; i++ {
		if i == n-1 {
			return count
		}
		if arr[i]+i > maxIndex {
			maxIndex = arr[i] + i
		}
		steps--
		if steps == 0 {
			if i > maxIndex {
				return -1
			}
			steps = maxIndex - i
			count++
		}
	}
	return count
}

func main() {
	arr := []int{2, 3, 0, 1, 4}
	fmt.Println(minimumCost(arr))
}

package main

import (
	"fmt"
	"sort"
)

func minimiseMaximumDifference(arr []int, k int) int {
	sort.Ints(arr)
	n := len(arr)
	tempMin := arr[0] + k
	tempMax := arr[n-1] - k
	sum := arr[n-1] + k - tempMin
	var max int
	var min int
	for i := 0; i < n-1; i++ {
		if arr[i]+k >= tempMax {
			max = arr[i] + k
		} else {
			max = tempMax
		}
		if arr[i+1]-k <= tempMin {
			min = arr[i+1] - k
		} else {
			min = tempMin
		}
		if max-min < sum {
			sum = max - min
		}
	}
	return sum
}

func main() {
	arr := []int{3, 9, 12, 16, 20}
	k := 3
	fmt.Println(minimiseMaximumDifference(arr, k))
}

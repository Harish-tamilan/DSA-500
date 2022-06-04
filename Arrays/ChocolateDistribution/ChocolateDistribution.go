package main

import (
	"fmt"
	"math"
	"sort"
)

func chocolateDistribution(arr []int, m int) int {
	sort.Ints(arr)
	diff := math.MaxInt
	n := len(arr)
	i := 0
	j := m - 1
	for ; j < n; j++ {
		if arr[j]-arr[i] < diff {
			diff = arr[j] - arr[i]
		}
		i++
	}
	return diff
}

func main() {
	arr := []int{7, 3, 2, 4, 9, 12, 56}
	fmt.Println(chocolateDistribution(arr, 5))
}

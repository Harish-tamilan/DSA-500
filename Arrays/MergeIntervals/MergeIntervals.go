package main

import (
	"fmt"
	"sort"
)

func mergeIntervals(arr [][]int) [][]int {
	sort.Slice(arr, func(i, j int) bool {
		return arr[i][0] < arr[j][0]
	})
	fmt.Println(arr)
	intervals := make([][]int, 0)
	n := len(arr)
	start := arr[0][0]
	end := arr[0][1]
	for i := 1; i < n; i++ {
		if arr[i][0] <= end {
			if arr[i][1] > end {
				end = arr[i][1]
			}
		} else {
			intervals = append(intervals, []int{start, end})
			start = arr[i][0]
			end = arr[i][1]
		}
	}
	intervals = append(intervals, []int{start, end})
	return intervals
}

func main() {
	arr := [][]int{{1, 4}, {0, 4}}
	fmt.Println(mergeIntervals(arr))
}

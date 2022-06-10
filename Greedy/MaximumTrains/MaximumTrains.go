package main

import (
	"fmt"
	"sort"
)

func method1(arr [][]int) int {
	sort.Slice(arr, func(i, j int) bool {
		return arr[i][1] < arr[j][1]
	})
	n := len(arr)
	max := 0
	for i := 0; i < n; i++ {
		if arr[i][2] > max {
			max = arr[i][2]
		}
	}
	count := 0
	list := make([]int, max+1)
	for i := 0; i < n; i++ {
		plat := arr[i][2]
		start := arr[i][0]
		end := arr[i][1]
		if list[plat] == 0 {
			count++
			list[plat] = end
		} else {
			if list[plat] < start {
				count++
				list[plat] = end
			}
		}
	}
	return count
}

func main() {
	arr := [][]int{
		{1000, 1030, 1},
		{1010, 1030, 1},
		{1000, 1020, 2},
		{1030, 1230, 2},
		{1200, 1230, 3},
		{900, 1005, 1},
	}
	fmt.Println(method1(arr))
	//fmt.Println(arr)
}

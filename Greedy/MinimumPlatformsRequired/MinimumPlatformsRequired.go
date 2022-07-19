package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, dep []int) int {
	sort.Ints(arr)
	sort.Ints(dep)
	count := 1
	i := 1
	j := 0
	max := 0
	n := len(arr)
	for i < n && j < n {
		if arr[i] > dep[j] {
			count--
			j++
		} else {
			count++
			i++
		}
		if count > max {
			max = count
		}
	}
	return max
}

func main() {
	arr := []int{900, 945, 955, 1100, 1500, 1800}
	dep := []int{920, 1200, 1130, 1150, 1900, 2000}
	fmt.Println(method1(arr, dep))
}

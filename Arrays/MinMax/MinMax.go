package main

import (
	"fmt"
	"sort"
)

func method1(arr []int) []int {
	sort.Ints(arr)
	res := make([]int, 0)
	res = append(res, arr[0])
	res = append(res, arr[len(arr)-1])
	return res
}

func method2(arr []int) []int {
	res := make([]int, 0)
	min := 99999
	max := -99999
	for i := 0; i < len(arr); i++ {
		if arr[i] < min {
			min = arr[i]
		}
		if arr[i] > max {
			max = arr[i]
		}
	}
	res = append(res, min)
	res = append(res, max)
	return res
}

func main() {
	arr := []int{3, 2, 1, 5, 4}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

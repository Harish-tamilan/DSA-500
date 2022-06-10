package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, arr2 []int) []int {
	sort.Ints(arr)
	sort.Ints(arr2)
	i := 0
	j := 0
	n := len(arr)
	n2 := len(arr2)
	res := make([]int, 0)
	for i < n && j < n2 {
		for ; i < n-1 && arr[i] == arr[i+1]; i++ {

		}
		for ; j < n2-1 && arr2[j] == arr[j+1]; j++ {

		}
		if arr[i] == arr2[j] {
			res = append(res, arr[i])
			i++
			j++
		} else if arr[i] > arr2[j] {
			res = append(res, arr2[j])
			j++
		} else {
			res = append(res, arr[i])
			i++
		}
	}
	for ; i < n; i++ {
		res = append(res, arr[i])
		i++
	}
	for ; j < n2; j++ {
		res = append(res, arr2[j])
		j++
	}
	return res
}

func main() {
	arr := []int{1, 3, 4, 5, 7}
	arr2 := []int{2, 3, 5, 6}
	fmt.Println(method1(arr, arr2))
}

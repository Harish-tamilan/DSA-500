package main

import "fmt"

func method1(arr []int, arr2 []int) []int {
	res := make([]int, 0)
	n := len(arr)
	n2 := len(arr2)
	j := 0
	i := 0
	for i < n && j < n2 {
		if arr[i] < arr2[j] {
			res = append(res, arr[i])
			i++
		} else {
			res = append(res, arr2[j])
			j++
		}
	}
	for i < n {
		res = append(res, arr[i])
		i++
	}
	for j < n2 {
		res = append(res, arr2[j])
		j++
	}
	return res
}

func main() {
	arr := []int{1, 3, 5, 7}
	arr2 := []int{0, 2, 6, 8, 9}
	fmt.Println(method1(arr, arr2))
}

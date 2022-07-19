package main

import "fmt"

func method1(arr []int, arr2 []int) int {
	n := len(arr)
	n2 := len(arr2)
	i := 0
	j := 0
	sum := n + n2
	for i < n && j < n2 {
		if (i + j) == sum/2 {
			if i > j {
				return (arr[i-1] + arr2[j]) / 2
			} else {
				return (arr[i] + arr2[j-1]) / 2
			}
		}
		if arr[i] > arr2[j] {
			j++
		} else {
			i++
		}
	}
	return -1
}

func main() {
	arr := []int{1, 12, 15, 26, 38}
	arr2 := []int{2, 13, 17, 30, 45}
	fmt.Println(method1(arr, arr2))
}

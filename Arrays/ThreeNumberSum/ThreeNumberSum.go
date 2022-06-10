package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, sum int) []int {
	n := len(arr)
	res := make([]int, 0)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			for k := j + 1; k < n; k++ {
				if arr[i]+arr[j]+arr[k] == sum {
					res = append(res, arr[i])
					res = append(res, arr[j])
					res = append(res, arr[k])
					return res
				}
			}
		}
	}
	return res
}

func method2(arr []int, sum int) []int {
	sort.Ints(arr)
	n := len(arr)
	var temp int
	res := make([]int, 0)
	for i := 0; i < n; i++ {
		k := n - 1
		for j := i + 1; j < k; {
			temp = arr[i] + arr[j] + arr[k]
			if temp == sum {
				res = append(res, arr[i])
				res = append(res, arr[j])
				res = append(res, arr[k])
				return res
			} else if temp > sum {
				k--
			} else {
				j++
			}
		}
	}
	return res
}

func main() {
	arr := []int{12, 3, 4, 1, 6, 9}
	sum := 24
	fmt.Println(method1(arr, sum))
	fmt.Println(method2(arr, sum))
}

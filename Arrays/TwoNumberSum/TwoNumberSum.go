package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, sum int) []int {
	res := []int{-1, -1}
	n := len(arr)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if arr[i]+arr[j] == sum {
				res[0] = arr[i]
				res[1] = arr[j]
				return res
			}
		}
	}
	return res
}

func method2(arr []int, sum int) []int {
	mp := make(map[int]bool)
	n := len(arr)
	for i := 0; i < n; i++ {
		mp[arr[i]] = true
	}
	res := []int{-1, -1}
	for i := 0; i < n; i++ {
		_, ok := mp[sum-arr[i]]
		if ok {
			res[0] = arr[i]
			res[1] = sum - arr[i]
			return res
		}
	}
	return res
}

func method3(arr []int, sum int) []int {
	sort.Ints(arr)
	res := []int{-1, -1}
	i := 0
	j := len(arr) - 1
	var temp int
	for i < j {
		temp = arr[i] + arr[j]
		if temp == sum {
			res[0] = arr[i]
			res[1] = arr[j]
			return res
		} else if temp > sum {
			j--
		} else {
			i++
		}
	}
	return res
}

func main() {
	arr := []int{10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}
	sum := 11
	fmt.Println(method1(arr, sum))
	fmt.Println(method2(arr, sum))
	fmt.Println(method3(arr, sum))
}

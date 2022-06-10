package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, sum int) [4]int {
	res := [4]int{}
	n := len(arr)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			for k := j + 1; k < n; k++ {
				for l := k + 1; l < n; l++ {
					if arr[i]+arr[j]+arr[k]+arr[l] == sum {
						res[0] = arr[i]
						res[1] = arr[j]
						res[2] = arr[k]
						res[3] = arr[l]
						return res
					}
				}
			}
		}
	}
	return res
}

func method2(arr []int, sum int) [4]int {
	res := [4]int{}
	sort.Ints(arr)
	n := len(arr)

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			l := j + 1
			r := n - 1
			temp := arr[i] + arr[j]
			for l < r {
				cur := arr[l] + arr[r]
				if temp+cur > sum {
					r--
				} else if temp+cur < sum {
					l++
				} else {
					res[0] = arr[i]
					res[1] = arr[j]
					res[2] = arr[l]
					res[3] = arr[r]
					return res
				}
			}
		}
	}
	return res
}

func main() {
	arr := []int{-1, -2, -2, -2, -4, -5, 0, 0, 1}
	sum := -9
	fmt.Println(method1(arr, sum))
	fmt.Println(method2(arr, sum))
}

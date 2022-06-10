package main

import "fmt"

func method1(arr []int, k int) []int {
	ind := binarySearch(arr, 0, len(arr)-1, k, false, false)
	left := binarySearch(arr, 0, ind, k, true, false)
	right := binarySearch(arr, ind, len(arr)-1, k, false, true)
	fmt.Println("ind is ", ind, ", left is ", left, ", right is ", right)
	return []int{left, right}
}

func binarySearch(arr []int, l int, r int, k int, isLeft bool, isRight bool) int {
	for l <= r {
		m := l + (r-l)/2
		if arr[m] == k {
			if isLeft {
				if m == 0 {
					return 0
				} else if arr[m] != arr[m-1] {
					return m
				} else {
					r = m - 1
				}
			} else if isRight {
				if m == r {
					return r - 1
				} else if arr[m] != arr[m+1] {
					return m
				} else {
					l = m + 1
				}
			} else {
				return m
			}
		} else if arr[m] > k {
			r = m - 1
		} else {
			l = m + 1
		}
	}
	return -1
}

func main() {
	arr := []int{1, 3, 5, 5, 5, 5, 67, 123}
	x := 5
	method1(arr, x)
}

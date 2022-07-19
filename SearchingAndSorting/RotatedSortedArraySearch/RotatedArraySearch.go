package main

import (
	"fmt"
)

func method1(arr []int, k int) int {
	ind := findPivot(arr)
	//fmt.Println("ind is ", ind)
	if arr[ind] == k {
		return ind
	}
	if k < arr[0] {
		return binarySearch(arr, ind+1, len(arr)-1, k)
	} else {
		return binarySearch(arr, 0, ind-1, k)
	}
}

func binarySearch(arr []int, l int, r int, k int) int {
	m := 0
	for l <= r {
		m = l + (r-l)/2
		if arr[m] > k {
			r = m - 1
		} else if arr[m] < k {
			l = m + 1
		} else {
			return m
		}
	}
	return -1
}

func findPivot(arr []int) int {
	l := 0
	r := len(arr) - 1
	for l < r {
		m := l + (r-l)/2
		if m < r && arr[m] > arr[m+1] {
			return m
		}
		if arr[m] >= arr[l] {
			l = m + 1
		} else {
			r = m - 1
		}
	}
	return r
}

func method2(arr []int, k int) int {
	l := 0
	r := len(arr) - 1
	var m int
	for l <= r {
		m = l + r - l/2
		if arr[l] <= arr[m] && arr[m] <= arr[r] {
			if arr[m] == k {
				return m
			} else if arr[m] > k {
				r = m - 1
			} else {
				l = m + 1
			}
		} else if arr[l] <= arr[m] && arr[m] >= arr[r] {
			if arr[m] == k {
				return m
			} else {
				if k < arr[l] {
					l = m + 1
				} else if k > arr[m] {
					l = m + 1
				} else {
					r = m - 1
				}
			}
		} else if arr[l] >= arr[m] && arr[m] <= arr[r] {
			if arr[m] == k {
				return m
			} else {
				if k > arr[r] {
					r = m - 1
				} else if arr[m] < k {
					l = m + 1
				} else {
					r = m - 1
				}
			}
		} else {
			if arr[m] == k {
				return m
			} else if arr[m] > k {
				l = m + 1
			} else {
				r = m - 1
			}
		}
	}
	return -1
}

func main() {
	arr := []int{4, 5, 6, 7, 0, 1, 2}
	k := 0
	fmt.Println(method1(arr, k))
	fmt.Println(method2(arr, k))
}

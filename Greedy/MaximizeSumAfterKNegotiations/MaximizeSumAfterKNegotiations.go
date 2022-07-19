package main

import "sort"

func method1(arr []int, k int) {
	sort.Ints(arr)
	n := len(arr)
	var i int
	for i = 0; i < n && k > 0; i++ {
		if arr[i] > 0 {
			break
		}
		if arr[i] == 0 {
			continue
		} else {
			arr[i] = -arr[i]
			k--
		}
	}
}

func main() {

}

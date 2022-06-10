package main

import "fmt"

func method1(arr []int, sub []int) bool {
	mp := make(map[int]int)
	n := len(arr)
	n2 := len(sub)
	for i := 0; i < n; i++ {
		el, ok := mp[arr[i]]
		if ok {
			mp[arr[i]] = el + 1
		} else {
			mp[arr[i]] = 1
		}
	}
	for i := 0; i < n2; i++ {
		el, ok := mp[sub[i]]
		if ok {
			if el > 0 {
				mp[sub[i]] = el - 1
			} else {
				return false
			}
		} else {
			return false
		}
	}
	return true
}

func main() {
	arr := []int{11, 1, 13, 21, 3, 7}
	sub := []int{11, 3, 7, 1}
	fmt.Println(method1(arr, sub))
}

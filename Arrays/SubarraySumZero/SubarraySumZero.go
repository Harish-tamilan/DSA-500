package main

import "fmt"

func method1(arr []int) bool {
	n := len(arr)
	for i := 0; i < n; i++ {
		sum := arr[i]
		for j := i + 1; j < n; j++ {
			if sum == 0 {
				return true
			}
			sum += arr[j]
		}
	}
	return false
}

func method2(arr []int) bool {
	mp := make(map[int]bool)
	n := len(arr)
	sum := 0
	for i := 0; i < n; i++ {
		sum += arr[i]
		_, ok := mp[sum]
		if sum == 0 || ok {
			return true
		} else {
			mp[sum] = true
		}
	}
	return false
}

func main() {
	arr := []int{-3, 2, 3, 1, 6}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

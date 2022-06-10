package main

import "fmt"

func method1(arr []int) int {
	n := len(arr)
	for i := 0; i < n; i++ {
		temp := 1
		for j := i + 1; j < n; j++ {
			if arr[i] == arr[j] {
				temp++
			}
		}
		if temp > n/2 {
			return arr[i]
		}
	}
	return -1
}

func method2(arr []int) int {
	count := 1
	num := arr[0]
	n := len(arr)
	for i := 1; i < n; i++ {
		if arr[i] == num {
			count++
		} else {
			count--
			if count == 0 {
				num = arr[i]
				count = 1
			}
		}
	}
	count = 0
	for i := 0; i < n; i++ {
		if arr[i] == num {
			count++
		}
	}
	if count > n/2 {
		return num
	} else {
		return -1
	}
}

func main() {
	arr := []int{3, 1, 3, 2}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

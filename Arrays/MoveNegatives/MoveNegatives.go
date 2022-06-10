package main

import "fmt"

func method1(arr []int) {
	neg := make([]int, 0)
	pos := make([]int, 0)
	var i int
	n := len(arr)
	for i = 0; i < n; i++ {
		if arr[i] < 0 {
			neg = append(neg, arr[i])
		} else {
			pos = append(pos, arr[i])
		}
	}
	j := 0
	for i = 0; i < len(neg); i++ {
		arr[j] = neg[i]
		j++
	}
	for i = 0; i < len(pos); j++ {
		arr[j] = pos[i]
		i++
	}
}

func method2(arr []int) {
	i := -1
	j := 0
	n := len(arr)
	var temp int
	for ; j < n; j++ {
		if arr[j] < 0 {
			i++
			temp = arr[i]
			arr[i] = arr[j]
			arr[j] = temp
		}
	}
}

func main() {
	arr := []int{-12, 11, -13, -5, 6, -7, 5, -3, -6}
	//method1(arr)
	method2(arr)
	fmt.Println(arr)
}

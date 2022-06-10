package main

import "fmt"

func method1(arr []int) []int {
	n := len(arr)
	res := make([]int, 0)
	for i := n - 1; i >= 0; i-- {
		res = append(res, arr[i])
	}
	return res
}

func method2(arr []int) []int {
	i := 0
	j := len(arr) - 1
	var temp int
	for ; i < j; i++ {
		temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
		j--
	}
	return arr
}

func main() {
	arr := []int{5, 4, 3, 2, 1}
	//fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

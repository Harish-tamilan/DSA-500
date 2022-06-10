package main

import "fmt"

func method1(arr []int, k int) {
	n := len(arr)
	for i := 0; i < k; i++ {
		temp := arr[n-1]
		for j := n - 1; j > 0; j-- {
			arr[j] = arr[j-1]
		}
		arr[0] = temp
	}
}

func method2(arr []int, k int) []int {
	res := make([]int, 0)
	n := len(arr)
	for i := n - (n % k) - 1; i < n; i++ {
		res = append(res, arr[i])
	}
	for i := 0; i < n-(n%k)-1; i++ {
		res = append(res, arr[i])
	}
	return res
}

func rotate(arr []int, i int, j int) {
	var temp int
	for i < j {
		temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
		i++
		j--
	}
}

func method3(arr []int, k int) {
	n := len(arr)
	i := 0
	j := n - 1
	rotate(arr, i, j)
	i = 0
	j = k - 1
	rotate(arr, i, j)
	i = k
	j = n - 1
	rotate(arr, i, j)
}

func main() {
	arr := []int{1, 2, 3, 4, 5}
	// method1(arr, 2)
	// fmt.Println(method2(arr, 2))
	method3(arr, 2)
	fmt.Println(arr)
}

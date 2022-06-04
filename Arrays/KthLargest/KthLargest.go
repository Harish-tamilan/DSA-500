package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, k int) int {
	sort.Ints(arr)
	//fmt.Println(arr)
	n := len(arr)
	return arr[n-k]
}

func swap(arr []int, i int, j int) {
	//fmt.Println("i : ", i, ", j : ", j)
	temp := arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

func partition(arr []int, l int, r int) int {
	pivot := r
	i := l - 1
	for j := l; j < r; j++ {
		if arr[j] >= arr[pivot] {
			i++
			swap(arr, i, j)
		}
	}
	swap(arr, i+1, pivot)
	return i + 1
}

func method2(arr []int, l int, r int, k int) int {

	pi := partition(arr, l, r)
	if pi > k-1 {
		return method2(arr, l, pi-1, k)
	} else if pi < k-1 {
		return method2(arr, pi+1, r, k)
	} else {
		return arr[pi]
	}

}

func quickSort(arr []int, l int, r int, k int) {
	if l < r {
		pi := partition(arr, l, r)

		quickSort(arr, l, pi-1, k)

		quickSort(arr, pi+1, r, k)
	}
}

func main() {
	arr := []int{7, 10, 4, 3, 20, 15}
	//k := 1
	//quickSort(arr, 0, len(arr)-1, k)
	//fmt.Println(arr)
	for i := 1; i <= len(arr); i++ {
		fmt.Println(method1(arr, i))
		fmt.Println(method2(arr, 0, len(arr)-1, i))
		fmt.Println("---------------")
	}
}

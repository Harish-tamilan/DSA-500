package main

import "fmt"

func swap(arr []int, i int, j int) {
	//fmt.Println("i : ", i, ", j : ", j)
	temp := arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

func partition(arr []int, l int, r int, arr2 []int) int {
	pivot := r
	i := l - 1
	for j := l; j < r; j++ {
		if arr[j] <= arr[pivot] {
			i++
			swap(arr, i, j)
			swap(arr2, i, j)
		}
	}
	swap(arr, i+1, pivot)
	return i + 1
}

func quickSort(arr []int, l int, r int, arr2 []int) {
	if l < r {
		pi := partition(arr, l, r, arr2)

		quickSort(arr, l, pi-1, arr2)

		quickSort(arr2, pi+1, r, arr2)
	}
}

func method1(start []int, end []int) int {
	quickSort(start, 0, len(start)-1, end)
	fmt.Println(start)
	fmt.Println(end)
	en := end[0]
	n := len(start)
	count := 1
	for i := 1; i < n; i++ {
		if end[i] < en {
			en = end[i]
		}
		if start[i] > en {
			en = end[i]
			count++
		}

	}
	return count
}

func main() {
	start := []int{1, 3, 0, 5, 8, 5}
	end := []int{2, 4, 6, 7, 9, 9}
	fmt.Println(method1(start, end))
}

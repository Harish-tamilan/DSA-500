package main

import "fmt"

func intersection(arr []int, arr2 []int) []int {
	var fin []int
	i := 0
	j := 0
	n := len(arr)
	n2 := len(arr2)
	for i < n && j < n2 {
		for ; i < n-1 && arr[i] == arr[i+1]; i++ {

		}
		for ; j < n2-1 && arr2[j] == arr2[j+1]; j++ {

		}
		if arr[i] == arr2[j] {
			fin = append(fin, arr[i])
			i++
			j++
		} else if arr[i] > arr2[j] {
			j++
		} else {
			i++
		}
	}
	return fin
}

func main() {
	arr := []int{4, 4, 5, 9}
	arr2 := []int{4, 4, 8, 8, 9}
	fmt.Println(intersection(arr, arr2))
}

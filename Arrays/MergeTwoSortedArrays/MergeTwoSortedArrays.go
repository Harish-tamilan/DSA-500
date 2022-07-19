package main

import (
	"fmt"
	"sort"
)

func method1(arr []int, arr2 []int) {
	i := 0
	j := 0
	n2 := len(arr2)
	var temp int
	k := len(arr) - 1
	for i <= k && j < n2 {
		if arr[i] < arr2[j] {
			i++
		} else {
			temp = arr2[j]
			arr2[j] = arr[k]
			arr[k] = temp
			k--
			j++
		}
	}
	sort.Ints(arr)
	sort.Ints(arr2)
}

func method2(arr []int, arr2 []int) {
	n := len(arr)
	n2 := len(arr2)
	gap := (n + n2) / 2
	var temp int
	i := 0
	fmt.Println("gap is ", gap)
	for gap > 0 {
		i = 0
		j := gap
		for gap < n+n2 {
			if gap >= n && i < n {
				if arr[i] > arr2[gap%n] {
					temp = arr[i]
					arr[i] = arr2[gap%n]
					arr2[gap%n] = temp
				}
			} else if i < n {
				if arr[i] > arr[gap] {
					temp = arr[i]
					arr[i] = arr[gap]
					arr[gap] = temp
				}
			}
			i++
			gap++
		}
		gap = j / 2
		fmt.Println("j is ", j)
	}
}

func main() {
	arr := []int{5, 18, 20}
	arr2 := []int{10, 12}
	method2(arr, arr2)
	fmt.Println(arr)
	fmt.Println(arr2)
}

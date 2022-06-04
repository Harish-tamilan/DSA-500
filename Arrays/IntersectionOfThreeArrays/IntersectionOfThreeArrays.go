package main

import "fmt"

func method1(arr []int, arr2 []int, arr3 []int) []int {
	mp := make(map[int]int)
	for i := 0; i < len(arr); i++ {
		val := arr[i]
		_, ok := mp[val]
		if !ok {
			mp[val] = 1
		} else {
			mp[val] = mp[val] + 1
		}
	}
	for i := 0; i < len(arr2); i++ {
		val := arr2[i]
		_, ok := mp[val]
		if !ok {
			mp[val] = 1
		} else {
			mp[val] = mp[val] + 1
		}
	}
	for i := 0; i < len(arr3); i++ {
		val := arr3[i]
		_, ok := mp[val]
		if !ok {
			mp[val] = 1
		} else {
			mp[val] = mp[val] + 1
		}
	}
	list := make([]int, 0)
	for k, v := range mp {
		if v == 3 {
			list = append(list, k)
		}
	}
	fmt.Println(mp)
	return list
}

func method2(arr []int, arr2 []int, arr3 []int) []int {
	i := 0
	j := 0
	k := 0
	n := len(arr)
	n2 := len(arr2)
	n3 := len(arr3)
	list := make([]int, 0)
	for i < n && j < n2 && k < n3 {
		for i < n-1 && arr[i] == arr[i+1] {
			i++
		}
		for j < n2-1 && arr2[j] == arr2[j+1] {
			j++
		}
		for k < n3-1 && arr3[k] == arr3[k+1] {
			k++
		}
		if arr[i] == arr2[j] && arr2[j] == arr3[k] {
			list = append(list, arr[i])
			i++
			j++
			k++
		} else if arr[i] < arr2[j] {
			i++
		} else if arr2[j] < arr3[k] {
			j++
		} else {
			k++
		}
	}
	return list
}

func main() {
	arr := []int{1, 5, 10, 20, 40, 80}
	arr2 := []int{6, 7, 20, 80, 100}
	arr3 := []int{3, 4, 15, 20, 30, 70, 80, 120}
	fmt.Println(method1(arr, arr2, arr3))
	fmt.Println(method2(arr, arr2, arr3))
}

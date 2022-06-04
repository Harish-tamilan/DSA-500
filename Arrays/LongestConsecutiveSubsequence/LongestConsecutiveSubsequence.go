package main

import (
	"fmt"
	"sort"
)

func method1(arr []int) int {
	sort.Ints(arr)
	fmt.Println("arr is ", arr)
	temp := 1
	count := 1
	n := len(arr)
	for i := 1; i < n; i++ {
		if arr[i] == arr[i-1]+1 {
			temp++
		} else {
			if temp > count {
				count = temp
			}
			temp = 1
		}
	}
	return count
}

func method2(arr []int) int {
	mp := make(map[int]int)
	n := len(arr)
	for i := 0; i < n; i++ {
		_, ok := mp[arr[i]]
		if !ok {
			mp[arr[i]] = 1
		}
	}
	//fmt.Println("map is ", mp)
	count := 0
	temp := 0
	for i := 0; i < n; i++ {
		_, ok := mp[arr[i]-1]
		temp = 0
		if !ok {
			for j := arr[i]; ; j++ {
				_, ok := mp[j]
				if ok {
					temp++
				} else {
					break
				}
			}
		}
		//fmt.Println(" i is ", i, ", temp is ", temp)
		if temp > count {
			count = temp
		}
	}
	return count
}

func main() {
	arr := []int{2, 6, 1, 9, 4, 5, 3}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

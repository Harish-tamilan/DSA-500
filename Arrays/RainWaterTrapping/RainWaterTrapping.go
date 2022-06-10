package main

import "fmt"

func rainWater(arr []int) int {
	sum := 0
	left := arr[0]
	var i int
	n := len(arr)
	var ind int
	for i = 1; i < n; i++ {
		if left > arr[i] {
			sum += left - arr[i]
		} else {
			left = arr[i]
			ind = i
		}
	}
	i--
	fmt.Println("sum is ", sum)
	if ind != n-1 {
		sum -= left - arr[n-1]
	}
	right := arr[n-1]
	fmt.Println("sum is ", sum)
	for i = n - 2; i > ind; i-- {
		if right > arr[i] {
			sum -= left - right
		} else {
			sum -= left - arr[i]
			right = arr[i]
		}
	}
	return sum
}

func main() {
	arr := []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
	fmt.Println(rainWater(arr))
}

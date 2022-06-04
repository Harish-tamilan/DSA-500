package main

import (
	"fmt"
)

func method1(arr []int) int {
	product := -99999
	n := len(arr)
	for i := 0; i < n; i++ {
		temp := arr[i]
		if temp > product {
			product = temp
		}
		for j := i + 1; j < n; j++ {
			temp *= arr[j]
			if temp > product {
				product = temp
			}
		}
	}
	return product
}

func minimumOfThree(one int, two int, three int) int {
	if one < two {
		if three < one {
			return three
		} else {
			return one
		}
	} else {
		if three < two {
			return three
		} else {
			return two
		}
	}
}

func maximumOfThree(one int, two int, three int) int {
	if one > two {
		if three > one {
			return three
		} else {
			return one
		}
	} else {
		if three > two {
			return three
		} else {
			return two
		}
	}
}

func method2(arr []int) int {
	min := arr[0]
	max := arr[0]
	product := -9999999
	n := len(arr)
	for i := 1; i < n; i++ {
		temp1 := min * arr[i]
		temp2 := max * arr[i]
		min = minimumOfThree(temp1, temp2, arr[i])
		max = maximumOfThree(temp1, temp2, arr[i])
		if max > product {
			product = max
		}
	}
	return product
}

func main() {
	arr := []int{2, 3, 4, 5, -1, 0}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

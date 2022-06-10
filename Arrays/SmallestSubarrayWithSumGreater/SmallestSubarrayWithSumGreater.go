package main

import "fmt"

func method1(arr []int, k int) int {
	n := len(arr)
	count := n
	sum := 0
	j := 0
	for i := 0; i < n; {
		for sum <= k && i < n {
			sum += arr[i]
			i++
		}
		for sum > k && j < n {
			sum -= arr[j]
			if i-j < count {
				count = i - j
			}
			j++
		}
	}
	return count
}

func main() {
	arr := []int{1, 4, 45, 6, 0, 19}
	k := 51
	fmt.Println(method1(arr, k))
}

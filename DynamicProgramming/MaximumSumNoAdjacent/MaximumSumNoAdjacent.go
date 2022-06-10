package main

import "fmt"

func max(i int, j int) int {
	if i > j {
		return i
	}
	return j
}

func method1(arr []int) int {
	n := len(arr)
	dp := make([]int, n)
	dp[0] = arr[0]
	prev := 0
	for i := 1; i < n; i++ {
		dp[i] = max(prev+arr[i], dp[i-1])
		prev = dp[i-1]
	}
	return dp[n-1]
}

func main() {
	arr := []int{1, 2, 3}
	fmt.Println(method1(arr))
}

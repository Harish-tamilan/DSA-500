package main

import "fmt"

func max(i int, j int) int {
	if i > j {
		return i
	}
	return j
}

func method1(arr [][]int) int {
	n := len(arr)
	m := len(arr[0])
	dp := make([][]int, n)
	var i int
	var j int
	for i = 0; i < n; i++ {
		dp[i] = make([]int, m)
	}
	for i = 0; i < n; i++ {
		dp[i][m-1] = arr[i][m-1]
	}
	for i = m - 2; i >= 0; i-- {
		for j = 0; j < n; j++ {
			if j == 0 && j == n-1 {
				dp[j][i] = arr[j][i] + dp[j][i+1]
			} else if j == 0 {
				dp[j][i] = arr[j][i] + max(dp[j][i+1], dp[j+1][i+1])
			} else if j == n-1 {
				dp[j][i] = arr[j][i] + max(dp[j][i+1], dp[j-1][i+1])
			} else {
				dp[j][i] =
					arr[j][i] +
						max(dp[j-1][i+1], max(dp[j][i+1], dp[j+1][i+1]))
			}
		}
	}
	//fmt.Println(dp)
	maxm := 0
	for i = 0; i < n; i++ {
		maxm = max(maxm, dp[i][0])
	}
	return maxm
}

func main() {
	arr := [][]int{
		{2, 1},
		{1, 2},
	}
	fmt.Println(method1(arr))
}

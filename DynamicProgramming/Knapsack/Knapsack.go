package main

import "fmt"

func max(i int, j int) int {
	if i > j {
		return i
	} else {
		return j
	}
}

func method1(weights []int, values []int, n int) int {

	m := len(values)
	arr := make([][]int, m+1)
	for i := 0; i <= m; i++ {
		arr[i] = make([]int, n+1)
	}

	for i := 0; i <= m; i++ {
		for j := 0; j <= n; j++ {
			if i == 0 || j == 0 {
				arr[i][j] = 0
			} else if j >= weights[i-1] {
				arr[i][j] = max(arr[i-1][j-weights[i-1]]+values[i-1], arr[i-1][j])
			} else {
				arr[i][j] = arr[i-1][j]
			}
		}
	}
	return arr[m][n]
}

func main() {
	weights := []int{4, 5, 1}
	values := []int{1, 2, 3}
	wght := 4
	fmt.Println(method1(weights, values, wght))
}

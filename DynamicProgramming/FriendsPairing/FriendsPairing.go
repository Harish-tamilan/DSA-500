package main

import "fmt"

func method1(n int) int {
	if n <= 2 {
		return n
	}
	return method1(n-1) + (n-1)*method1(n-2)
}

func method2(n int) int {
	dp := make([]int, n+1)
	dp[1] = 1
	dp[2] = 2
	for i := 3; i <= n; i++ {
		dp[i] = dp[i-1] + (i-1)*dp[i-2]
	}
	return dp[n]
}

func method3(n int) int {
	a := 1
	b := 2
	var c int
	for i := 3; i <= n; i++ {
		c = b + (i-1)*a
		a = b
		b = c
	}
	return c
}

func main() {
	n := 4
	fmt.Println(method1(n))
	fmt.Println(method2(n))
	fmt.Println(method3(n))
}

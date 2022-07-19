package main

func max(n int, n2 int, n3 int) int {
	return 0
}

func method1(n int, x int, y int, z int, dp []int) int {
	if n <= 0 {
		return 0
	}
	if dp[n] != 0 {
		return dp[n]
	}
	no := -999
	no2 := -999
	no3 := -999
	if n <= x {
		no = method1(n, x, y, z, dp)
	}
	if n <= y {
		no2 = method1(n, x, y, z, dp)
	}
	if n <= z {
		no3 = method1(n, x, y, z, dp)
	}
	dp[n] = 1 + max(no, no2, no3)
	return dp[n]
}

func main() {
	N := 4
	x := 2
	y := 1
	z := 1
	dp := make([]int, N+1)

	method1(N, x, y, z, dp)
}

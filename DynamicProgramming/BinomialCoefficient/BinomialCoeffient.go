package main

import (
	"fmt"
)

func method1(c int, r int) int {
	if r == 0 || c == r {
		return 1
	}
	return method1(c-1, r-1) + method1(c-1, r)
}

func method2(c int, r int) int {
	arr := make([][]int, c+1)
	var i int
	var j int
	for i = 0; i <= c; i++ {
		arr[i] = make([]int, r+1)
	}
	for i = 0; i <= c; i++ {
		var n int
		if i < r {
			n = i
		} else {
			n = r
		}
		for j = 0; j <= n; j++ {
			if j == 0 || i == j {
				arr[i][j] = 1
			} else {
				arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
			}
		}
	}
	return arr[c][r]
}

func main() {
	c := 4
	r := 2
	fmt.Println(method1(c, r))
	fmt.Println(method2(c, r))
}

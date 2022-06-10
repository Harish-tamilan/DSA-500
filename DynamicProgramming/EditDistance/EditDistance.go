package main

import (
	"fmt"
)

func min(i int, j int) int {
	if i < j {
		return i
	}
	return j
}

func method1(str string, str2 string) int {
	n := len(str)
	n2 := len(str2)
	arr := make([][]int, n+1)
	for i := 0; i <= n; i++ {
		arr[i] = make([]int, n2+1)
		arr[i][0] = i
	}

	for i := 0; i <= n2; i++ {
		arr[0][i] = i
	}

	for i := 1; i <= n; i++ {
		for j := 1; j <= n2; j++ {
			if str[i-1:i] != str2[j-1:j] {
				arr[i][j] = 1 + min(arr[i-1][j], min(arr[i-1][j-1], arr[i][j-1]))
			} else {
				arr[i][j] = arr[i-1][j-1]
			}
		}
	}
	//fmt.Println("arr is ", arr)
	return arr[n][n2]
}

func method2(str string, str2 string) int {
	n := len(str)
	n2 := len(str2)
	prev := make([]int, n2+1)
	cur := make([]int, n2+1)
	for i := 0; i <= n2; i++ {
		prev[i] = i
	}
	for i := 1; i <= n; i++ {
		cur[0] = i - 1
		for j := 1; j <= n2; j++ {
			if str[i-1:i] != str2[j-1:j] {
				cur[j] = 1 + min(prev[j], min(prev[j-1], cur[j-1]))
			} else {
				cur[j] = prev[j-1]
			}
		}
		copy(prev, cur)
	}
	return cur[n2]
}

func main() {
	str := "sunday"
	tar := "saturday"

	fmt.Println(method1(str, tar))
	fmt.Println(method2(str, tar))
}

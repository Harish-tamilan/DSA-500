package main

import "fmt"

func method1(arr []int, sum int) int {
	n := sum
	m := len(arr)
	tab := make([][]int, m+1)
	var i int
	var j int
	var v int
	for i = 0; i < m; i++ {
		tab[i] = make([]int, n+1)
	}
	for i = 0; i < m; i++ {
		for j = 0; j < n; j++ {
			tab[i][j] = 0
			v = j + 1
			if i == 0 {
				if arr[i] == v {
					tab[i][j] = 1
				} else if arr[i] > v {
					//tab[i][j] = arr[i]-v>=0 && arr[i]-v<arr.length?tab[i][arr[i]-v-1]:0;
					ind := arr[i] - v
					if tab[i][ind-1] > 0 {
						tab[i][j] = tab[i][ind-1]
					} else {
						tab[i][j] = 0
					}
				} else {
					//tab[i][j] = v-arr[i]>=0 && arr[i]-v<arr.length?tab[i][v-arr[i]-1]:0;
					ind := v - arr[i]
					if tab[i][ind-1] > 0 {
						tab[i][j] = tab[i][ind-1]
					} else {
						tab[i][j] = 0
					}
				}
			} else {
				if arr[i] == v {
					tab[i][j] = tab[i-1][j] + 1
				} else if arr[i] > v {
					tab[i][j] = tab[i-1][j]
				} else {
					tab[i][j] = tab[i-1][j] + tab[i][v-arr[i]-1]
				}
			}
		}
	}
	// for(let ar of tab)
	//     console.log(ar);
	return tab[m-1][n-1]
	//console.log(tab);
}

func method2(arr []int, sum int) int {
	dp := make([]int, sum+1)
	dp[0] = 1
	n := len(arr)
	for i := 0; i < n; i++ {
		for j := arr[i]; j <= sum; j++ {
			dp[j] += dp[j-arr[i]]
		}
	}
	return dp[sum]
}

func main() {
	arr := []int{1, 2, 3}
	n := 4
	fmt.Println(method2(arr, n))
	fmt.Println(method1(arr, n))
}

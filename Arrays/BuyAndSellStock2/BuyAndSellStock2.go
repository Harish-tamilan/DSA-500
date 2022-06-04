package main

import (
	"fmt"
	"math"
)

func method1(arr []int) int {
	n := len(arr)
	profit := make([]int, n)
	max := arr[n-1]
	var i int
	for i = n - 2; i >= 0; i-- {
		max = int(math.Max(float64(max), float64(arr[i])))
		profit[i] = int(math.Max(float64(profit[i+1]), float64(max-arr[i])))
	}
	min := arr[0]
	for i = 1; i < n; i++ {
		min = int(math.Min(float64(min), float64(arr[i])))
		profit[i] = int(math.Max(float64(profit[i-1]), float64(profit[i]+arr[i]-min)))
	}
	// fmt.Println("size of arr is ", n)
	// fmt.Print("profit array is ", profit)
	return profit[n-1]
}

func method2(arr []int) int {
	firstBuy := -99999
	firstSell := 0
	secondBuy := -9999
	secondSell := 0
	var i int
	n := len(arr)
	for i = 0; i < n; i++ {
		firstBuy = int((math.Max(float64(firstBuy), float64(-arr[i]))))
		firstSell = int((math.Max(float64(firstSell), float64(firstBuy+arr[i]))))
		secondBuy = int((math.Max(float64(secondBuy), float64(firstSell-arr[i]))))
		secondSell = int((math.Max(float64(secondSell), float64(secondBuy+arr[i]))))
	}
	return secondSell

}

func main() {
	arr := []int{10, 22, 5, 75, 65, 80}
	fmt.Println(method1(arr))
	fmt.Println(method2(arr))
}

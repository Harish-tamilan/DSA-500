package main

import (
	"fmt"
	"math"
)

func method1(n int) int {
	return int(math.Sqrt(float64(n)))
}

func main() {
	n := 25
	fmt.Println(method1(n))
}

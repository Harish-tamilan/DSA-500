package main

import (
	"fmt"
	"math"
)

func islandSurvival(s int, n int, m int) {
	if (n*6 < m*7 && s > 6) || m > n {
		fmt.Println("No")
	} else {
		// If we can survive then we can
		// buy ceil(A/n) times where A is
		// total units of food required.
		days := (m * s) / n

		if (m*s)%n != 0 {
			days++
		}
		fmt.Println("Yes ", math.Round(float64(days)))
	}
}

func main() {

}

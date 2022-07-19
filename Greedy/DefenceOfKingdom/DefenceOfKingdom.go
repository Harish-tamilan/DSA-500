package main

import "sort"

func method1(rows []int, cols []int, r int, c int) int {
	sort.Ints(rows)
	sort.Ints(cols)
	mx := 0
	my := 0
	for i := 0; i < r-1; i++ {
		if rows[i+1]-rows[i]-1 > mx {
			mx = rows[i+1] - rows[i] - 1
		} else {
			my = cols[i+1] - cols[i] - 1
		}
	}
	return mx * my
}

func main() {

}

package main

import (
	"fmt"
	"sort"
)

type job struct {
	id       int
	deadline int
	profit   int
}

func (arr jobList) Len() int {
	return len(arr)
}

func (arr jobList) Less(i, j int) bool {
	return arr[i].profit > arr[j].profit
}

func (arr jobList) Swap(i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func method1(arr jobList) int {
	sort.Sort(arr)
	n := len(arr)
	max := 0
	var i int
	for i = 0; i < n; i++ {
		if arr[i].deadline > max {
			max = arr[i].deadline
		}
	}
	visited := make([]bool, max)
	sum := 0
	count := 0

	for i := 0; i < n; i++ {
		if count == max {
			return sum
		}
		if visited[arr[i].deadline-1] == true {
			for j := arr[i].deadline - 2; j >= 0; j-- {
				if visited[j] == false {
					sum += arr[i].profit
					visited[j] = true
					count++
					break
				}
			}
		} else {
			sum += arr[i].profit
			visited[arr[i].deadline-1] = true
			count++
		}
	}
	return sum
}

type jobList []job

func main() {
	jobList := []job{
		job{1, 4, 20},
		job{2, 1, 10},
		job{3, 1, 40},
		job{4, 1, 30},
	}
	fmt.Println(method1(jobList))
	fmt.Println(jobList)
}

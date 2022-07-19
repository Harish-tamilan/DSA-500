package main

type num struct {
	ele   int
	count int
}

func method1(arr []int, k int) {
	countArr := make([]num, 0)
	n := len(arr)
	i := 0
	j := 0
	for i = 0; i < n; i++ {
		for j = 0; j < len(countArr); j++ {
			if countArr[j].ele == arr[i] {
				countArr[j].count += 1
				break
			}
		}
		if j == len(countArr) {
			temp := num{
				ele:   arr[i],
				count: 1,
			}
			countArr = append(countArr, temp)
		}
		if j >= k-1 {
			for l := 0; l < len(countArr); l++ {
				if countArr[l].ele != arr[i] {
					countArr[l].count -= 1
				}
			}
		}
	}
}

func main() {
	arr := []int{1, 1, 2, 2, 3, 5, 4,
		2, 2, 3, 1, 1, 1}
	k := 4
	method1(arr, k)
}

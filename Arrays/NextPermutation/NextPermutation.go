package main

import (
	"fmt"
)

//O(n^n!) time and O(n) space
func permutation(ques string, ans string, list []string) []string {
	if len(ques) == 0 {
		list = append(list, ans)
		return list
	}

	for i, c := range ques {
		list = permutation(ques[0:i]+ques[i+1:len(ques)], ans+string(c), list)
	}
	return list
}

func nextPermutation(arr []int) {
	ind := 0
	ind2 := len(arr) - 1

	for i := len(arr) - 2; i >= 0; i-- {
		if arr[i] < arr[i+1] {
			ind = i
			break
		}
	}

	for i := len(arr) - 1; i > ind; i-- {
		if arr[i] > arr[ind] {
			ind2 = i
			break
		}
	}

	if ind == 0 && ind2 == len(arr)-1 {
		for ; ind <= ind2; ind++ {
			swap(arr, ind, ind2)
			ind2--
		}
	} else {
		fmt.Println(arr)
		swap(arr, ind, ind2)
		fmt.Println(arr)
		for ind = ind + 1; ind <= ind2; ind++ {
			swap(arr, ind, ind2)
			ind2--
		}
	}
}

func swap(arr []int, i int, j int) {
	temp := arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

func main() {
	//The below code is for first method (permutation())
	// ques := "1324"
	// list := permutation(ques, "", []string{})
	// sort.Slice(list, func(i, j int) bool {
	// 	return list[i] < list[j]
	// })
	// fmt.Println(list)
	// index := sort.SearchStrings(list, ques)
	// if index == len(list)-1 {
	// 	s := strings.Split(ques, "")
	// 	sort.Strings(s)
	// 	fmt.Println(strings.Join(s, ""))
	// } else {
	// 	fmt.Println(list[index+1])
	// }

	arr := []int{4, 3, 2, 1}
	nextPermutation(arr)
	fmt.Println(arr)
}

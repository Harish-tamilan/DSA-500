package main

import (
	"fmt"
)

func method1(str []byte) {
	arr := [26]int{}
	for i := 0; i < 26; i++ {
		arr[i] = -1
	}
	var char1 byte
	var char2 byte
	char1 = 'a'
	char2 = 'a'
	n := len(str)

	for i := 0; i < n; i++ {
		if arr[str[i]-97] == -1 {
			arr[str[i]-97] = i
		}
	}
	fmt.Println("arr is ", arr)
outer:
	for i := 0; i < n; i++ {
		temp := byte(97)
		for ; temp < str[i]; temp++ {
			if arr[temp-97] >= 0 && arr[(temp-97)] > i {
				char1 = temp
				char2 = str[i]
				break outer
			}
		}
	}
	fmt.Println("char1 is ", char1, ", char2 is ", char2)
	for i := 0; i < n; i++ {
		if str[i] == char1 {
			str[i] = char2
		} else if str[i] == char2 {
			str[i] = char1
		}
	}
	fmt.Println("str is ", str)
}

func main() {
	str := "ccab"
	arr := make([]byte, len(str))
	for i := 0; i < len(str); i++ {
		arr[i] = str[i]
	}
	fmt.Println(arr)
	method1(arr)
	fmt.Println(arr)
}

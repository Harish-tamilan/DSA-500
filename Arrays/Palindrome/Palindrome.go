package main

import (
	"fmt"
	"strings"
)

func palindrome(str string) bool {
	n := len(str)
	i := 0
	j := n - 1
	for i < j {
		if strings.ToLower(str[i:i+1]) != strings.ToLower(str[j:j+1]) {
			return false
		}
		i++
		j--
	}
	return true
}

func main() {
	str := "Malayalaam"
	fmt.Println(palindrome(str))
}

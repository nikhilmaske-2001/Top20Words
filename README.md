# Top 20 Words web app

Problem statement: Find the frequency of occurrence of each word from the [content](https://www.terriblytinytales.com/test.txt) and plot a histogram of top 20 words.

# Screenshot:
![Github](https://user-images.githubusercontent.com/59444243/205675851-b5fca966-53f9-440b-a989-239c435cdef5.jpg)


# Technology Used:

- ReactJS
- [react-chart-histogram](https://www.npmjs.com/package/react-chart-histogram) - A react library to plot histogram

# Code structure
Complete code is written in `App.js` file including the logic for solving the question as well the histogram component.

# My Approaches to solve the problem
Approach 1: Using a array
Find the frequency of each word by comparing each word with other words. Use an array to store the frequency of each word in a (key,value) format.
Then sort the 2D array in descending order according to the value and pick the first 20 elements.

Time complexity: O(N^2)+ O(D) + O(DlogD) = O(N^2) [O(N^2) to compare each word with other words, O(D) to find that word in a frequency array and O(DlogD) for sorting the array, (here N is the number of words and D is the number of unique words)]
Space complexity: O(D) [O(D) to store the frequency of each word in an array, here D is the number of unique words]

Approach 2: Using a Map
Find the frequency of each word using Map. Then store the frequency in an array and sort it in decreasing order. Pick the first 20 elements.

Time complexity: O(N) + O(DlogD) = O(N) [O(N) to find the frequency of each word, O(DlogD) for sorting the array, (here N is the number of words and D is the number of unique words)]
Space complexity: O(D) [O(D) to store the frequency of each word in a Map]
In the 2nd approach, we have reduced time complexity from O(N^2) to O(N)

Approach 3: Using a MaxPriority queue 

Approach 4: Using a MaxHeap

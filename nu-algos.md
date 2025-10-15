## 128. Longest Consecutive Sequence  
  
### 1. Problem Understanding  
- **Input:** Unsorted array of integers `nums` (0 \u2264 length \u2264 10\u2075).  
- **Output:** Length of the longest consecutive elements sequence (e.g., `[1,2,3,4]` has length 4).  
- **Constraint:** Must run in O(n) time.  
  
  
### 2. Brute-force Baseline  
Sort the array, then iterate to find the longest consecutive streak:  
```python  
def longestConsecutive(nums):  
    if not nums:  
        return 0  
    nums.sort()  
    max_len = 1  
    current_len = 1  
    for i in range(1, len(nums)):  
        if nums[i] == nums[i-1] + 1:  
            current_len += 1  
            max_len = max(max_len, current_len)  
        elif nums[i] != nums[i-1]:  # Skip duplicates  
            current_len = 1  
    return max_len  
```  
*Limitation:* Sorting takes O(n log n) time, violating the O(n) constraint.  
  
  
### 3. Key Invariant  
A consecutive sequence starts with a number `n` where `n-1` is **not** in `nums`. This identifies the "root" of a potential sequence.  
  
  
### 4. Data Structure Mapping  
Use a **hash set** for O(1) lookups. Store all numbers in a set to check existence of `n-1`/`n+1` in constant time.  
  
  
### 5. Optimized Solution  
Iterate through the set. For each `n` that is a sequence start (`n-1` not in the set), count consecutive numbers (`n+1`, `n+2`, ...) to find the sequence length:  
```python  
def longestConsecutive(nums):  
    num_set = set(nums)  
    max_len = 0  
    for n in num_set:  
        if n - 1 not in num_set:  # Start of a sequence  
            current_len = 1  
            while n + 1 in num_set:  
                current_len += 1  
                n += 1  
            max_len = max(max_len, current_len)  
    return max_len  
```  
*Time Complexity:* O(n) (each number is checked once).  
  
  
### 6. Reusable Helpers  
- `create_num_set(nums)`: Converts the input array to a set.  
- `is_sequence_start(n, num_set)`: Checks if `n` is the start of a sequence.  
- `count_sequence_length(n, num_set)`: Counts consecutive numbers starting from `n`.  
- `remove_duplicates(arr)`: Returns a new list with duplicate elements removed.  
- `find_min_max(arr)`: Returns the minimum and maximum elements in an array.  
- `build_frequency_map(arr)`: Creates a dictionary mapping each element to its frequency in the array.
 ## js helpers

 function createNumSet(nums) {
    /**
     * Converts the input array to a Set.
     */
    return new Set(nums);
}

function isSequenceStart(n, numSet) {
    /**
     * Checks if `n` is the start of a sequence.
     */
    return !numSet.has(n - 1);
}

function countSequenceLength(n, numSet) {
    /**
     * Counts consecutive numbers starting from `n`.
     */
    let currentLen = 0;
    let currentNum = n;
    while (numSet.has(currentNum)) {
        currentLen++;
        currentNum++;
    }
    return currentLen;
}

function removeDuplicates(arr) {
    /**
     * Returns a new array with duplicate elements removed.
     */
    return [...new Set(arr)];
}

function findMinMax(arr) {
    /**
     * Returns the minimum and maximum elements in an array.
     */
    if (arr.length === 0) {
        return [null, null];
    }
    return [Math.min(...arr), Math.max(...arr)];
}

function buildFrequencyMap(arr) {
    /**
     * Creates a Map mapping each element to its frequency in the array.
     */
    const frequencyMap = new Map();
    for (const item of arr) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }
    return frequencyMap;
}

## python helpers

def create_num_set(nums):
    """Converts the input array to a set."""
    return set(nums)

def is_sequence_start(n, num_set):
    """Checks if `n` is the start of a sequence."""
    return (n - 1) not in num_set

def count_sequence_length(n, num_set):
    """Counts consecutive numbers starting from `n`."""
    current_len = 0
    current_num = n
    while current_num in num_set:
        current_len += 1
        current_num += 1
    return current_len

def remove_duplicates(arr):
    """Returns a new list with duplicate elements removed."""
    return list(set(arr))

def find_min_max(arr):
    """Returns the minimum and maximum elements in an array."""
    if not arr:
        return None, None
    return min(arr), max(arr)

def build_frequency_map(arr):
    """Creates a dictionary mapping each element to its frequency in the array."""
    frequency_map = {}
    for item in arr:
        frequency_map[item] = frequency_map.get(item, 0) + 1
    return frequency_map

 ## 128. Longest Consecutive Sequence

### Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
 
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:
Input: nums = [1,0,1,2]
Output: 3

constrain
could be a neg number 

concept
a sequence ie 1234 or 100 101 102
so similar

but brute force

for every string 


https://leetcode.com/problems/longest-consecutive-sequence/

https://open.spotify.com/episode/68pQrsXmsyCpJmD7HpdDDJ?si=CBz7PSMsRJOelKNDDxzO4g

var longestConsecutive = function(nums) {
    // Step 1: Handle the base case when the array is empty.
    if (nums.length === 0) {
        return 0;
    }

    // Step 2: Create a set for O(1) lookups and remove duplicates.
    const numSet = new Set(nums);
    let longest = 0;

    // Step 3: Iterate through each number in the set.
    for (const num of numSet) {
        // Step 4: Check if it's the start of a sequence.
        // A number is a start of a sequence if its predecessor (num - 1) is not in the set.
        if (!numSet.has(num - 1)) {
            let currentLength = 1;
            let currentNum = num;

            // Step 5: Count the length of the consecutive sequence starting from num.
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            // Step 6: Update the longest sequence length found so far.
            longest = Math.max(longest, currentLength);
        }
    }

    // Step 7: Return the result.
    return longest;
};



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
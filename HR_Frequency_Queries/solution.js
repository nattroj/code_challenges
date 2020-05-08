function freqQuery(queries) {
    const results = [];
    const nums = {};
    const freq = {};
    
    for (let i = 0; i < queries.length; i++) {
        const [command, num] = queries[i];

        switch (command) {
            case 1:
                if (!(num in nums)) {
                    nums[num] = 0;
                }

                nums[num]++;

                if (nums[num]-1 in freq && freq[nums[num] - 1] > 0) {
                    freq[nums[num]-1]--;
                }

                freq[nums[num]] = nums[num] in freq ? freq[nums[num]] + 1 : 1;

                break;
            case 2:
                if (num in nums && nums[num] > 0) {
                    nums[num]--;

                    if (nums[num]+1 in freq && freq[nums[num] + 1] > 0) {
                        freq[nums[num]+1]--;
                    }
                    
                    freq[nums[num]] = nums[num] in freq ? freq[nums[num]] + 1 : 1;
                }
                break;
            case 3:
                if (num in freq && freq[num] > 0) {
                    results.push(1);
                } else {
                    results.push(0);
                }
                break;
        }
    } 

    return results;
}
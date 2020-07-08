public class Solution
{
    public int[] TwoSum(int[] nums, int target)
    {
        for (var i = 0; i < nums.Length - 1; i++)
        {
            if (nums[i] > target) continue;
            for (var j = i + 1; j < nums.Length; j++)
            {
                if (nums[j] > target) continue;
                if (target == nums[i] + nums[j]) return new int[] { i, j };
            }
        }
        return new int[] { };
    }
}
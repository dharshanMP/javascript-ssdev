// const nums = [10, 20, 30];
// nums[2] = 99;
// console.log(nums);

// function getLastValue(arr = [2, 10, 60, 90]) {
//   const last_value = arr[arr.length - 1];
//   console.log(last_value);
//   console.log(arr.reverse());
// }

// getLastValue();

// function adding(arr = [1, 2, 3], num = 4) {
//   for (i = 0; i < arr.length; i++) {
//     const added_values = (arr[i] += num);

//     console.log(added_values);
//   }
// }

// adding();

// let added_arr = [];

// function adding_arrays(arr = [1, 2, 3], arr2 = [1, 2, 3]) {
//   for (i = 0; i < arr.length; i++) {
//     added_arr.push((arr[i] += arr2[i]));
//   }
//   console.log(added_arr);
// }

// adding_arrays();

// positive_arr = [];

// function count_positive(arr = [-2, 3, -9, -4, 7, -1, 5]) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] > 0) {
//       positive_arr.push(arr[i]);
//     }
//     i++;
//   }
// }

// count_positive();
// console.log(positive_arr);

// let value_arr = [{ min: "", max: "" }];

// function minMax(nums = [1, -3, 7, -4]) {
//   if (nums.length === 0) return; //

//   let min = nums[0];
//   let max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < min) {
//       min = nums[i];
//     }
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }

//   value_arr.push({ min: min, max: max });
//   console.log(value_arr);
// }

// minMax();

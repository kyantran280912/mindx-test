// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
// Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)

function adjacentElementsProduct(inputArray) {
  if (inputArray.length === 1) return 0;

  let result = inputArray[0] * inputArray[1];

  for (var i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > result) {
      result = inputArray[i] * inputArray[i + 1];
    }
  }
  console.log(result);
  return result;
}

// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

// Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]

function alternatingSums(array) {
  let resultsArray = [0, 0];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      resultsArray[0] += array[i];
    } else {
      resultsArray[1] += array[i];
    }
  }
  console.log(resultsArray);
  return resultsArray;
}
alternatingSums([60, 40, 55, 75, 64])
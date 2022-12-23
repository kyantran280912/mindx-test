import "./App.css";

function App() {
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
  adjacentElementsProduct([2, 3, -5, -2, 4]);
  // Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
  // Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

  // Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]

  function alternatingSums(a) {
    let result = [0, 0];
    for (let i = 0; i < a.length; i++) {
      // chan
      if (i % 2 === 0) {
        result[0] += a[i];
      }
      // le
      else {
        result[1] += a[i];
      }
    }
    console.log(result);
    return result;
  }
  alternatingSums([60, 40, 55, 75, 64]);

  return (
    <div className="App">
      <h1>Bài Test MindX</h1>
    </div>
  );
}

export default App;

## Primitive type (Dữ liệu nguyên thủy)

- `number`: kiểu số (1, 1.5, 1.00006, -99, 0)
- `string`: kiểu chuỗi / chữ ("123", "Developer", "Artist")
- `bool`: kiểu điều kiện, nó chỉ có 1 trong 2 giá trị là `true` hoặc `false`, có thể dùng `==` hoặc `!=` để so sánh 2
  giá trị với nhau:

  ```js
  let a = 1;
  let b = 2;

  a == b; // ==> output: false
  a != b; // ==> output: true

  let c = 2;
  a == c; // ==> output: false
  b == c; // ==> output: true

  let peopleName1 = "RaeKyo";
  let peopleName2 = "raekyo";

  peopleName1 == peopleName2; // ==> output: false

  let isSingle = false;
  let isRich = false;

  isSingle == isRich; // ==> output: true
  ```

## Reference type (Dữ liệu tham chiếu)

- `object` hoặc `{}`: đối tượng là tập hợp của nhiều thuộc tính và mỗi thuộc tính mang 1 giá trị riêng

  ```js
  // syntax
  {
    property1: value1,
    property2: value2,
    ...
  }

  // Khai báo một object (đối tượng) tên là `people` có các properties (thuộc tính) lần lượt là name, major, age, isSingle
  let people = {
    name: "Tien",
    major: "Developoer",
    age: 22,
    isSingle: true,
  };

  // có thể truy cập các properties của object bằng syntax: object.properties
  people.name; // Tien
  people.major; // Developer
  people.age; // 22
  people.isSingle; // true
  ```

## Conditional (Câu điều kiện)

- `if(condition) ... else ...`: Nếu (if) (điều kiện đúng) thì ..., nếu không thì (else) ...

  ```js
  // syntax
  if (condition) {
    // execute if condition is true
  } else {
    // execute if condition is false
  }

  let a = 2024;
  let b = 3025;

  if (a == b) {
    console.log("a va b bang nhau");
  } else {
    console.log("a va b khong bang nhau");
  }
  // ==> output: a va b khong bang nhau

  b = b - 1001; // giảm b 1001 đơn vị
  if (a == b) {
    console.log("a va b bang nhau");
  } else {
    console.log("a va b khong bang nhau");
  }
  // ==> output: a va b bang nhau
  ```

- `switch(value) ... case`: Kiểm tra trường hợp của `value` xem có trùng với giá trị vào của `case` hay không, nếu có
  trường hợp `value` bằng một giá trị nào đó của `case` thì sẽ thực thi các câu lệnh bên trong nó cho tới khi đụng từ
  khóa `break`, nếu không nó sẽ thực hiện các câu lệnh trong `default` cho tới khi đụng từ khóa `break`.

  ```js
  // syntax
  switch (value) {
    case valueToCheck1:
      /// ...
      break;
    case valueToCheck2:
      /// ...
      break;
    case valueToCheck3:
      /// ...
      break;
    default:
      break;
  }

  let people = {
    name: "Tien",
    major: "Developoer",
    age: 22,
    isSingle: false,
  };

  switch (people.age) {
    case 17:
      console.log("Bạn không đủ tuổi");
      break;
    case 18:
      console.log("Chúc mừng bạn đã đủ điều kiện để tham gia");
      break;
    case 22:
      console.log("Rất tiếc, Bạn đã quá tuối để tham gia");
      break;
    default:
      break;

    // ==> output: Rất tiếc, Bạn đã quá tuối để tham gia
  }
  ```

## Data structure (Cấu trúc lữ liệu cơ bản)

- `Array[]`: mảng là một câu trúc dữ liệu dùng để lưu trữ các tất cả các loại giá trị khác nhau bao gồm cả một mảng khác

  - Array có thể lưu một mảng giá trị của số được gọi là mảng số: `number[]` hoặc chuỗi `string[]` hoặc `object[]`
  - Một số function/method (phương thức để giao tiếp với mảng)

    - `at(index)` hoặc `arr[index]`: truy cập phần tử mảng tại vị trí index (có thể dùng lấy phần tử hoặc thay thế phần
      tử tại vị trí index)

      ```js
      let array = [24, 7, 2002];
      array.at(1); //  ==> output: 7
      array[1]; //  ==> output: 7

      let catArr = [
        { name: "Tien", age: 22 },
        { name: "Lucy", age: 1 },
        { name: "Deep Yellow", age: 0.95 },
      ];
      catArr[1]; // ==> output: { name: "Lucy", age: 1 }
      ```

    - `push(newElement)`: thêm một phần tử (newElement) và vị trí cuối cùng của mảng

      ```js
      let array = [24, 7, 2002];
      array.push(18);
      // ==> output: [24, 7, 2002, 18]

      let catArr = [{ name: "Tien", age: 22 }], { name: "Lucy", age: 1 };
      let newCat = { name: "Deep Yellow", age: 0.95 };
      newCat.age = 0.98
      catArr.push(newCat);
      // ==> output: [{ name: "Tien", age: 22 }, { name: "Lucy", age: 1 }, { name: "Deep Yellow", age: 0.98 }]
      ```

    - `splice(startIndex, deleteCount, item1, item2, item3, ...)`: Đây là một function (phương thức) phổ biến có thể
      dùng một cách sáng tạo để có thể biểu diễn create, update, delete

      ```js
      let array = [24, 7, 2002];

      let indexToDelete = 1;

      array.splice(indexToDelete, 1); // xóa `1` phần tử của array tại `indexToDelete`
      // ==> output: [24, 2002]

      array.splice(0, 1, 999); // bắt đầu tại vị trí 0, xóa 1 phần tử, thêm một phần tử tại vị trí index với giá trị `999`
      // ==> output: [999, 2002]

      array.splice(0, 0, 12345); // bắt đầu tại vị trí 0, xóa 0 phần tử, thêm một phần tử tại vị trí index với giá trị `12345`
      // ==> output: [12345, 999, 2002]
      ```

    - Some tips:

      ```js
      // Có thể truy cập và update (thay đổi) giá trị của mảng tại vị trí index
      let catArr = ["lucy", "dark yellow"];

      let VangKheCat = "deep yellow";

      catArr[1] = VangKheCat;

      console.log(catArr); // ==> output: ["lucy", "deep yellow"]
      ```

## Thao tác với console

- Console hay Terminal là màn hình hiển thị dạng kí tự chữ, số, biểu tượng
- Một số function/method (phương thức để giao tiếp với console)

  ```js
  let arr = [12, 34, 99, 101];

  console.log("Hello world"); // Hiển thị chuỗi "Hello world" ra ngoài console
  console.log(arr); // Hiển thị arr ra ngoài console

  console.table(arr); // Hiển thị arr ra ngoài console dưới dạng table
  ```

- Đọc giá trị từ console: sử dụng thư viện realine từ Javascript

  ```js
  // Khai báo sử dụng thư viện có sẵn tên là "readline" có tác dụng tương tác với console
  const readline = require("readline");
  // tạo phương thức để giao tiếp với console qua cổng input và output là node standard console
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  // Hiển thị thông báo và nhận về một câu trả lời từ những gì người dùng nhập
  rl.question("What is your age ?", (answer) => {
    // dùng readline gọi hàm question cung cấp thao số 1 là `nội dung hiển thị `, tham số thứ 2 là một function, function này có 1 thuộc tính là answer, để cho phép chúng ta tương tác với nó
    console.log("Your age is: " + answer); // gọi console để log ra màn hình câu thông báo về thông tin vừa nhập
  });
  ```

## The last Mission (maybe)

- Tạo ra một chương trình quản lí todo list(danh sách các cần làm) với các yêu cầu sau:
- Chương trình phải hiển thị và tương tác ở console
- Không được xảy ra lỗi cú pháp
- Một `todo` sẽ gồm có title, content, isComplete
- Tạo ra một menu với 6 chức năng

  1. Hiển thị tất cả todo list
  2. Hiển thị todo tại vị trí index
  3. Tạo todo
  4. Sửa todo tại vị trí index

  - 4.1 Sửa tất cả thuộc tính (title, content, isComplete)
  - 4.2 Sửa trang (y/n)

  5. Xóa todo tại vị trí index
  6. Thoát chương trình

  ```

  ```

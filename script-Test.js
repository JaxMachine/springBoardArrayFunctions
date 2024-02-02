//Array function tests

//double value test
it("should double values of array when the function doubleValues is run", function () {
  expect(doubleValues([1, 2, 3])).toEqual([2, 4, 6]);
});

//evens only Test
it("should return only the even values of an array", function () {
  expect(onlyEvenValues([4, 2, 5, 6, 11, 10])).toEqual([4, 2, 6, 10]);
});

//First and Last Value Test
it("should return only the first and last values of an array", function () {
  expect(showFirstAndLast(["Tim", "Sarah", "James"])).toEqual([
    "Tm",
    "Sh",
    "Js",
  ]);
});

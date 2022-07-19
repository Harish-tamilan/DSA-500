class Job {
  constructor(start, end, profit) {
    this.start = start;
    this.end = end;
    this.profit = profit;
  }
}

function method1(arr) {
  arr.sort((a, b) => a.end - b.end);
}

let arr = [
  new Job(1, 2, 50),
  new Job(3, 5, 20),
  new Job(6, 19, 100),
  new Job(2, 100, 200),
];

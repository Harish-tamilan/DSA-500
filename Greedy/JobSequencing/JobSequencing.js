class Job {
  constructor(id, deadline, profit) {
    this.id = id;
    this.deadline = deadline;
    this.profit = profit;
  }
}

function method1(arr) {
  let max = 0,i,j,count=0;
  arr.sort((a,b)=>{
    max = Math.max(max,Math.max(a.deadline,b.deadline));
    return b.profit-a.profit;
  });
  console.log('arr is ', arr);
  //console.log('max is ', max);
  let tab = new Array(max+1);
  for(i=0;i<arr.length;i++){
    if(count==max){
      break;
    }
    if(tab[arr[i].deadline]){
      j=arr[i].deadline-1;
      while(tab[j]){
        j--;
      }
      if(j>0){
        tab[j]=arr[i].profit;
        count--;
      }
    }else{
      tab[arr[i].deadline]=arr[i].profit;
      count--;
    }
  }
  let sum=0;
  //console.log(tab);
  for(i=1;i<tab.length;i++)
    if(tab[i])
      sum+=tab[i];
  return sum;
}


let arr = [
  new Job(1,2,100),
  new Job(2,1,19),
  new Job(3,2,27),
  new Job(4,1,25),
  new Job(5,1,15)
];

console.log(method1(arr));

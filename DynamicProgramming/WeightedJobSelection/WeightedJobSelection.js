class Job
{
    constructor(start, finish, profit)
    {
        this.start = start
        this.finish = finish
        this.profit = profit
    }
}

function method1(jobs){
    jobs.sort((job, job2)=>job.finish-job2.finish);
    let n=jobs.length;
    let dp = new Array(n);
    let i,j;
    for(i=0;i<n;i++){
        dp[i] = jobs[i].profit;
    }
    for(i=1;i<n;i++){
        for(j=0;j<n;j++){
            if(jobs[j].finish<=jobs[i].start){
                dp[i] = Math.max(dp[i], dp[i]+dp[j]);
            }
        }
    }
    return dp[n-1];
}

let values = [ [3, 10, 20], [1, 2, 50],
           [6, 19, 100], [2, 100, 200] ]
let arr = []
for(let i of values)
    arr.push(new Job(i[0], i[1], i[2]))

console.log(method1(arr));
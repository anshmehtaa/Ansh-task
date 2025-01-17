//prog 4 integer break
const integerBreak = (n)=>{
    if(n<=3){
        return n-1;
    }
    let dp = new Array( n + 1).fill(0);
    dp[1]=1;
    dp[2]=2;
    dp[3]=3;
    for(let i=4; i<=n; i++){
        for ( let j= 1; j<i; j++){
            dp[i]=Math.max(dp[i],j*dp[i-j]);
        }
        
    }
    return dp[n];
    
};
console.log(integerBreak(10));

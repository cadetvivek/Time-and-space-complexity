<script>
{/* Which of the given options provides the increasing 
order of asymptotic complexity of functions f1, f2, f3 and f4?

f1(n)=2^n

f2(n)=n^(3/2)

f3(n)=nLogn

f4(n)=n^(Logn)

(A) f3, f2, f4, f1      
(B) f2, f3, f4, f1
(C) f3, f2, f1, f4
(D) f2, f1, f4, f3 */}


    {/* for(i=0;i<n;i++){         //n times O(n)
     print(*) // O(1)
    } */}

 {/* for(i=0;i<n/2;i++){       // n/2 = 1/2*n = O(n)
     print(*) // O(n)
    } */}

     {/* for(i=0;i<n;i=i+2){      // n/2 = 1/2*n = O(n)
     print(*) // O(1)             // it's incre 2 4 6 8 10 if 
                                  // we have 100 to loop itereate 50 mites
    } */}                         
    
     {/* for(i=0;i<n/2;i=i+2){    // n/4 = 1/4*n = O(n)
     print(*) 
    } */}


    {/* for(i=1;i<=n;i++){          //n
        for(j=1;j<=n/2;j++){    //n/2
            c=c+1;              //o(1)
        }                       // n*n/2 = 1/2*n2 = 0(n2)
    } */}


{/* for(i=1;i<=n;i++){             //n
        for(j=1;j<=n/4;j++){       //n/4
           for(k=1;k<=n;k++){      //n
            print("*")             n*n/4*n = 1/4*n3 = O(n3)
           }            
        }                       
    } */}


   {/* for(i=1;i<=n;i++){
    print("*")                //n
   }

for(j=1;j<=n;j++){           //n
    print("*")
   }
for(k=1;k<=n;k++){           //n
    print("*")               //  n+n+n = O(n)
   } */}      



{/* for(i=1;i<=n;i++){             //n
        for(j=1;j<=n/4;j++){       //n/4
           for(k=1;k<=n;k++){      // 1 bedause it's exicute one times due to break;
            print("*")             // n*n/4*1 = n2/4 = O(n2)
            break;            
           }            
        }                       
    } */}


{/* for(i=1;i<=n;i++){                    //n        
        for(j=1;j<=n/4;j++){             //n/4
           for(k=n/2;k<=n;k=k+n/2){     // total iteratoins 2 
            c = c+1                     // n*n/4*2 = n2/2 = n2
           }            
        }  Inner Loop (k loop):
     //          
    } */}

   //////////////////////////////////////////////////////
cheack out one by one each time complexity

 {/* O(1) - Constant Time Complexity:

function getFirstElement(arr) {
    return arr[0];
} */}



{/* O(log n) - Logarithmic Time Complexity:

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
} */}



{/* O(n) - Linear Time Complexity:

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
} */}


{/* O(n log n) - Linearithmic Time Complexity
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], l = 0, r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) result.push(left[l++]);
        else result.push(right[r++]);
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
} */}


{/* O(n^2) - Quadratic Time Complexity:
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
} */}


{/* O(n^3) - Cubic Time Complexity:
function threeSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return result;
} */}


{/* O(2^n) - Exponential Time Complexity:
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
} */}


{/* O(n!) - Factorial Time Complexity:
function permute(arr) {
    let results = [];
    if (arr.length === 0) return [[]];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        let remainingPerms = permute(remaining);
        for (let perm of remainingPerms) {
            results.push([current].concat(perm));
        }
    }
    return results;
} */}

</script>


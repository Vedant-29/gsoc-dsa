// Complete the functions

function usersWithRating(onlyViewed, attempted, visited){
    return visited - onlyViewed
}

function usersWithHighRating(onlyViewed, attempted, visited) {
    const data =  usersWithRating(onlyViewed,attempted,visited);
    return data - attempted;
}

function solve(N, A, B) {
    var result1 = usersWithRating(A, B, N);
    var result2 = usersWithHighRating(A, B, N);
    console.log(result1, result2);
}


solve(10, 3, 2); // output should be 7 5
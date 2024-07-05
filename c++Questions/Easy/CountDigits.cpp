#include<iostream>
#include<cmath>
#include<algorithm>
using namespace std;

// Optimal method:

int main() {
    int num;
    cout << "Enter a set of numbers = ";
    cin >> num;

    int count = (int)log10(num) + 1;

    cout << "The number of digits = " << count;
}



// Brute force Method:

// int main() {
//     int num;
//     cout << "Enter a set of numbers = ";
//     cin >> num;

//     int original = num;
//     int reversed = 0;
//     int sum = 0;

//     while(num != 0) {
//         reversed = reversed*10 + num % 10;
//         num /= 10;
//         sum++;
//     }

//     cout << "The number of digits in the number = "<< sum;

//     return 0;
// }
#include<iostream>
using namespace std;

int main() {

    int arr[5];
    int sum;
    
    cout << "Enter an array of the size 5 = ";

    for (int i=0; i < 5; i++) {
        cin >> arr[i];
    }

    for (int i=0; i < 5; i++) {
        sum += arr[i];
    }

    cout << "The sum of the elements of the array is = " << sum << endl;

    return 0;
}
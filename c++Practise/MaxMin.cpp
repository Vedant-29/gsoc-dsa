#include<iostream>
using namespace std;

int getMax(int arr[], int num) {
    int max = INT_MIN;

    for (int i=0; i<num;i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int getMin(int arr[], int num) {
    int min = INT_MAX;

    for (int i=0; i<num;i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


int main() {
    int size;
    cout << "Enter a size of an array = ";
    cin >> size;

    int num[10000];

    for(int i=0; i < size; i++) {
        cin >> num[i];
    }


    cout << "The maximum value in your array is = " << getMax(num, size);
    cout << "The minimum value in your array is = " << getMin(num, size);


    return 0;
}
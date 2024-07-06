#include<iostream>
using namespace std;

int main() {
    // input data:
    int n;
    cout << "Enter the size of inital array = ";
    cin >> n;
    int arr[100];
    for (int i=0; i < n; i++) {
        cin >> arr[i];
    }

    // Perloading data - hashing;
    int hash[13] = {0}; // 13 taken as an exmaple basis
    for (int i = 0; i < n; i++) {
        hash[arr[i]] += 1;
    }

    // Fetching the data - based on which numbers u want;
    int n2;
    cout << "Enter the size of the fetching number = ";
    cin >> n2;
    while (n2 != 0) {
        int number;
        cin >> number;
        cout << hash[number] << endl;
    }
}
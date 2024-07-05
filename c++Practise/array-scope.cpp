#include<iostream>
using namespace std;


void update(int arr[] , int n) {

    cout << "Enter the function" << endl;
        for (int i= 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    cout << "Going back to the main function" << endl;

}

int main() {

    int arr[5] = {1,2,3,4,5};

    update(arr, 5);

    cout << "Printing inside the main function" << endl;
    for (int i= 0; i < 5; i++) {
        cout << arr[i] << " ";
    }

    return 0;
}
#include<iostream>
#include<array>
using namespace std;

int main() {


    int sizeArray;
    cout << "Enter a size for an array = ";
    cin >> sizeArray;

    int arr[100];
    int revArray[100];

    cout << "Enter a number and press enter to add to array =" << endl;
    for (int i=0; i<sizeArray; i++) {
        cin >> arr[i];
    }

    for (int n=0; n < sizeArray; n++) {
        revArray[n] = arr[sizeArray-1-n];
    } 

    cout << "Printing reversed array = ";
    for (int j=0; j < sizeArray; j++) {
        cout << revArray[j] << " ";
    }
    return 0;
}
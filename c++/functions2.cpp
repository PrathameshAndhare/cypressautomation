// Return by address
// Return by reference
// Difference between global and local variable is that global variable can be accessed throught the program and static are accessible only inside the function in which they are declared
// Static code
// Recursive function 
// function for linear search
#include<iostream>
using namespace std;
// Return by address-->
// int *fun(int size){
//     int *p=new int[size];
//     for(int i=0;i<size;i++){
//         p[i]=i+1;
//     }
//     return p;
// }
// int main(){
//
//     int *ptr=fun(5);
//     for(int i=0;i<5;i++){
//         cout<<ptr[i];
//     }
//     // ------------------

// }
// -------------------------------------------
// Return by reference---
// int & fun(int &a){
//     cout<<a;
//     return a;
// }
// main(){
//     int x=10;
//     fun(x)=20;
//     cout<<x;
// }
// ------------------------------------------
// static code-->
// void fun(){
//     static int s=10;
//     s++;
//     cout<<s<<endl;
// }
// main(){
//     fun();
//     fun();
// }
// Here if static is not written then it will give 11 two times. and when ststic is written it will give 11,12
// ----------------------------------------------
//  Recursive function--->
// void fun(int n){
//     if (n>0){
//         cout<<n<<endl;
//         fun(n-1);
//     }
// }
// int main(){
//     fun(5);
// }
// ------------------------------------------------
// function for linear search-->
// int search(int A[],int n,int key){
//     for (int i=0;i<n;i++){
//         if (key==A[i]){
//             return i;
//         }
//         return 0;
//     }
// }
// int main(){
//     int A[]={1,88,77,5,26,45,81}
//     int k;
//     cout<<"Enter key"<<endl;
//     cin>>k;
//     int index= search(A,7,k);
//     cout<<"Found at "<<index<<endl;
// }
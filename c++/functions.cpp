// 1. Function overloading
// 2. Function template
// 3. Default arguments
// 4. Parameter passing methods(pass by value, pass by address, pass by reference)
// return type Function name (parameter){
    // description;
    // return xyz;
// }
// Function will always have return type
#include<iostream>
#include<string>

using namespace std;
template <class T>

// float Add(float x,float y){
//     float z;
//     z=x+y;
//     return z;
//}

// int max(int x, int y){
//     if(x>y){
//         return x;
//     }
//     else{
//         return y;
//     }
// }
// float max( float x, float y){
//     if(x>y){
//         return x;
//     }
//     else{
//         return y;
//     }
// }
// -------------------------------
// Function template
// T max(T x, T y){
//     if(x>y){
//             return x;
//         }
//         else{
//             return y;
//         }
        
// }

// -------------------------------
// T add(T x, T y, T z=0){
//     return x+y+z;
//}
// -------------------------------
// call by value-->
// void swap(int a, int b){
//     cout<<a<<" "<<b<<endl;
//     int temp;
//     temp=a;
//     a=b;
//     b=temp;
//     cout<<a<<" "<<b<<endl;
// }
// ------------------------------
// call by address-->
// void swap(int *a,int *b){
//     int temp;
//     temp=*a;
//     *a=*b;
//     *b=temp;
// }
int main(){
//     // float s=Add(14.21,3.26);
//     // cout<<s<<endl;
//     // return 0;
//     float cc=max(10.3,5.96);
//     cout<<cc;
// ---------------------------------
    // 2.Template-->
    // int dd=max(10,6);
    // float ee=max(10.6f,6.9f);
    // cout<<dd<<endl<<ee<<endl;
    // -------------------------------------
    // Default arguments-->
    // int pp=add(40,89);
    // cout<<pp<<endl;
    // float ppp=add(10.14,2.87,6.369);
    // cout<<ppp<<endl;
    // here add () will take z=0 if only 2 parameters are passed else z=0 gets updated as written
    // default is always made from last element
    // --------------------------------------
//     int x=12,y=30;
//     swap(x,y);
//     cout<<x<<" "<<y<<endl;
// -------------------------------------------
//     int x=10,y=30;
//     swap(&x,&y)
    // cout<<x<<" "<<y<<endl; 
    // In case of call by value, original numbers are not swaped , only copy of numbers in void are swaped.
    // In case of pass by address, write "*" in front of every a and b in void and "&" before x and y in swap in int main() ,they are pointers and swaps original values unlike pass by value.
    // In case of pass by reference, write "&" in front of a and b only in void swap( int &a, int &b) and notingnin front of x and y in main()
    // IN CASE OF REFERENCE , SEPEREATE CODE IS NOT GENERATED, THAT CODE IS TAKEN IN MAIN FUNCTION.

    // int x=20,y=30;
    // swap(&x,&y);
    // cout<<x<<" "<<y<<endl;
}

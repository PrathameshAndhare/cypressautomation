#include<iostream>
using namespace std;
// -----------------------------
// int main(){
//     int x=10,y=2,z;
//     try{
//         if(y==0){
//             throw 1;
//         }
//         z=x/y;
//         cout<<z<<endl;
    
//     }
//     catch(int e){
//         cout<<"Division by zero "<<e<<endl;
//     }
//     cout<<"Done ";
// }
// -----------------------------------
int division(int a,int b){
    if (b==0){
        throw 1;
    }
    return a/b;
}
int main(){
    int x=10,y=0,z;
    try{
        z=division(x,y);
        cout<<z<<endl;
    }
    catch(int e){
        cout<<"Division by zero "<<"error code "<<e<<endl;
    }
    cout<<"Done";
}
// catch(...) means catch all . It should be written in last catch block.
//if catch all is written before some catch block it will not run 
// you can write try and catch inside try 

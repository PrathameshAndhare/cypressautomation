// return type Function name (parameter){
    // description;
    // return xyz;
// }
// Function will always have return type
#include<iostream>
#include<string>
using namespace std;

float Add(float x,float y){
    float z;
    z=x+y;
    return z;
}
int main(){
    float s=Add(14.21,3.26);
    cout<<s<<endl;
    return 0;
}
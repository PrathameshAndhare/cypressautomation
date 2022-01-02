// constants
// preproccessor directives
//namespace
#include<iostream>
using namespace std;

// class Demo{
//     public:
//     int x;
//     int y;
//     void display()const{
//         // x++;
//         cout<<x<<" "<<y<<endl;
//     }
// };
// int main(){
//     Demo d;
//     d.display();
// }
// -------------------------------------------
// preprocessor directives

// #define max(x,y) (x>y?x:y)
// #define msg(x) #x

// #ifndef PI
//     #define PI 3
// #endif
// int main(){
//     cout<<max(10,12)<<endl;
//     cout<<msg(hello)<<endl;
// }
// -------------------------------------------
// namespace-->
namespace First{
void fun(){
    cout<<"First"<<endl;
    }
};
namespace Second{
void fun(){
    cout<<"Second"<<endl;
    }
};
int main(){
    First::fun();
    Second::fun();
}
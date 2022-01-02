#include<iostream>
using namespace std;
// class Demo{
//     int *p;
//     public:
//     Demo(){
//         p=new int [10];
//         cout<<"Constructor of demo"<<endl;
//     }
//     ~Demo(){
//         delete []p;
//         cout<<"Destructor of demo"<<endl;
//     }
// };
// void fun(){
//     Demo *p=new Demo();
//     delete p;
// }
// int main(){
//     fun();
// }
// ---------------------------
class Base {
    public:
    Base(){
        cout<<"Constructor of base"<<endl;//1
    }
    virtual ~Base(){
        cout<<"Destructor of base"<<endl;//4
    }
};
class Derived:public Base{
    public:
    Derived(){
        cout<<"Constructor of derived"<<endl;//2
    }
    ~Derived (){
        cout<<"Destructor of derived "<<endl;//3
    }
};
void fun(){
    // Derived d;
    Base *p=new Derived();
    delete p;
}
int main(){
    fun();
}
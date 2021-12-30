// overriding(same name or function name different purpose)
// virtual functions
// Runtime polymorphism
//abstract class 
#include<iostream>
using namespace std;
// override-->
// class Base{
//     public:
//     void display(){
//         cout<<"Dispaly of base "<<endl;
//     }
// };
// class Derived:public Base{
//     public:
//     void display(int x){
//         cout<<"Dispaly of derived "<<x<<endl;
//     }
// };
// int main(){
//     Derived d;
//     d.Base::display();
//     d.display(5);
// }
// ---------------------------------
// virtual function-->
// class Base{
//     public:
//     virtual void fun(){
//         cout<<"fun of base "<<endl;
//     }
// };
// class Derived:public Base{
//     public:
//     void fun(){
//         cout<<"fun of derived "<<endl;
//     }
// };
// int main(){
//     Derived d;
//     Base *ptr=&d;
//     ptr->fun();//fun of base will be called when virtual is not written .the opposite of virtual is called .
    

// }
// --------------------------------------------
// class BasicCar{
//     public:
//     virtual void start(){cout<<"BasicCar started"<<endl;}
// };
// class AdvanceCar:public BasicCar{
//     public:
//     void start(){cout<<"AdvanceCar started"<<endl;}
// };
// int main(){
//     BasicCar *p=new AdvanceCar();
//     p->start();
// }
// PURE VIRTUAL FUNCTION-->giving virtual function =0. i.e virtual void start()=0
// -----------------------------------------------
// Runtime polymorphism-->
// class Car{
//     public:
//     virtual void start(){cout<<"Car started"<<endl;}
// };
// class Innova:public Car{
//     public:
//     void start(){cout<<"Innova started"<<endl;}
// };
// class Swift:public Car{
//     public:
//     void start(){cout<<"Swift started"<<endl;}
// };
// int main(){
//     Car *p=new Innova();
//     p->start();//Innova started
//     p=new Swift();
//     p->start();//Swift started
// }
// -----------------------------------------------
//abstract class --> classes having virtual functions.
// objects cannot be made from abstract class but pointers can be made of abstract class

class car {
    public:
    virtual void start()=0;// abstract class used only for polymorphism
};
class innova:public Car{
    public:
    virtual void start(){cout<<"innova started"<<endl;}
};
class swift:public Car{
    public:
    virtual void start(){cout<<"swift started"<<endl;}
};
int main(){
    car c;
}

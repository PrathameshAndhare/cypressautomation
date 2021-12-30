// friend function
// static data members
// nested class

#include<iostream>
using namespace std;

// class Test{
//     private:int a;
//     protected:int b;
//     public:int c;
//     friend void fun();
// };
// void fun(){
//     Test t;
//     t.a=10;
//     t.b=20;
//     t.c=30;
// }
// ------------------------------
// class Your;
// class My{
//     private:int a;
//     protected:int b;
//     public:int c;
//     friend Your;
// };
// class Your{
//     public:
//     My m;
//     void fun(){
//         m.a=10;
//         m.b=20
//         m.c=30;
//     }
// };
// -------------------------------------
// static data members-->

// class Test{
//     public:
//     int a;
//     static int count;
//     Test(){
//         a=10;
//         count++;
//     }
//     static int getCount(){
//         // static data members can access only static data 
//         return count;
//     }
// };
// int Test::count = 0;
// int main(){
//     Test t1,t2;
//     // here seperate a will be created for t1 and t2 but count only one 
//     // cout<<t1.count<<endl;
//     // cout<<t2.count<<endl;
//     // t1.count=25;
//     // cout<<t2.count<<endl;
//     cout<<Test::getCount()<<endl;
//     cout<<t1.getCount()<<endl;


// }
// ----------------------------------
// class Innova {
//     public:
//     static int price ;
//     static int getPrice(){
//         return price;
//     }

// };
// int Innova::price=20;
// int main(){
//     Innova i1,i2,i3;
//     cout<<i1.price<<endl;//20
//     cout<<i3.price<<endl;//20
// }
// -----------------------------------
// class Student{
//     public:
//     int roll;
//     string name;
//     static int addNo;
//     Student(string n){
//         addNo++;
//         roll=addNo;
//         name=n;
//     }
//     void display(){
//         cout<<"Name is "<<name<<endl<<"Roll no. is "<<roll<<endl;
//     }
// };
// int Student::addNo=0;
// int main(){
//     Student s1("John");
//     Student s2("Sarthak");
//     Student s3("psa");
//     s1.display();
//     s3.display();

// }
// ----------------------------------
// Nested class-->
class Outer{
    public:
    void fun(){
        i.display();//outer class can access objects of inner class
    }
    class Inner{
        public:
        void display(){
            cout<<"Display of inner"<<endl;
        }
    };
    Inner i;
};
int main(){
    Outer::Inner i;
}
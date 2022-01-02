// vector
// map
// lambda function
// smart pointers
#include<iostream>
// #include<string>
// #include<vector>
// #include<map>
using namespace std;
// int main(){
//     vector<int> v={2,4,6,8};
//     v.push_back(20);
//     v.push_back(30);
//     v.pop_back();

//     vector<int>::iterator itr;
//     cout<<"Using iterator"<<endl;
//     for(itr=v.begin();itr!=v.end();itr++){
//         cout<<++*itr<<endl;
//     }
//     cout<<"Using forEach loop"<<endl;
//     for(int x:v){
//         cout<<x<<endl;
//     }
    
// }
// ----------------------------------------
// map-->

// int main(){
//     map<int ,string> m;
//     m.insert(pair<int,string>(1,"psa"));
//     m.insert(pair<int,string>(2,"ssa"));
//     m.insert(pair<int,string>(3,"csa"));

//     map<int,string>::iterator itr;
//     for(itr=m.begin();itr!=m.end();itr++){
//         cout<<itr->first<<" "<<itr->second<<endl;
//     }
//     map<int,string>::iterator itr 1;
//     itr1=m.find(2);
//     cout<<itr1->first<<" "<<itr1->second<<endl;
// }
// --------------------------------------------------
// lambda function-->

// [capture_list](parameter_list)->return type{body};
// int main(){
    
//     int s=[](int x,int y)->int{return x+y;}(10,5);
//     cout<<s<<endl;

//     int a=20;
//     int b=30;
//     [&a,&b](){cout<<++a<<" "<<++b;}();
// }
// -------------------------------------------------
// smart pointers--->

class Rectangle{
    int length;
    int breadth;
    public:
    Rectangle(int l,int b){
        length=l;
        breadth=b;
    }
    int area(){
        return length*breadth;
    }
};
int main(){
    unique_ptr<Rectangle>ptr(new Rectangle(10,5));
    cout<<ptr->area()<<endl;
}
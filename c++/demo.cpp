#include <iostream>
using namespace std;
int main(){
    string x;
    cout<<"Enter your name"<<endl;
    getline(cin,x);
    cout<<"Welcome "<<x<<endl;

    // --------------------------------
    int age,year;
    cout << 'Enter your age' << endl;
    cin >> age >> year;
    if (age < 58 && age > 18)
    {
        cout << 'You are adult' << endl;
    }
    else if (age < 18)
    {
        cout << 'You are child' << endl;
    }
    else
    {
        cout << 'You are old' << endl;
    }
    return 0;
    
}


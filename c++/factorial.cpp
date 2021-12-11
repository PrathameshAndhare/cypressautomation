// factorial of a number ---->

#include <iostream>
using namespace std;

int main(){

    long long  int n,fact=1;
    cout<<"Enter a number"<<endl;
    cin>>n;
    for (long long  int i=1;i<=n;i++){

        fact=fact*i;
    }
    cout<<"The factorial of "<<n<<" is "<<fact<<endl;
    return 0;

}

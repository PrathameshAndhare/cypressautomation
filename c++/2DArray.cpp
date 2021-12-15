// Matrix
// add two matrix
#include <iostream>
using namespace std;
int main(){
    int A[2][3]={{2,5,9},{6,9,15}};
    // or int A[2][3]={2,5,9,6,9,15};
    // if only 2 or or 3 etc elements but less than 6 are present then for others it will take 0 
    // array initialization A[Row][column]
    for(int i=0;i<2;i++){
        for ( int j=0;j<3;j++){
            cout<<A[i][j]<<" ";
        }
        cout<<endl;
    }
    // ----------------------------------
    int A[2][3]={{6,9,4},{9,7,2}};
    int B[2][3]={{6,7,5},{3,1,2}};
    int C[2][3];
    for(int i=0;i<2;i++){
        for(int j=0;j<3;j++){
            C[i][j]=A[i][j]+B[i][j];
        }
    }
    for(int i=0;i<2;i++){
        for ( int j=0;j<3;j++){
            cout<<C[i][j]<<" ";
        }
        cout<<endl;
    }
    // --------------------------------------

}
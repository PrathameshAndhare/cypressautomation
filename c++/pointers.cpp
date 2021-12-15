// Progran is run in code section. Memory allocation of the program is done in stack.

// pointers are used to store address of data 
/* int x=10;
int *P;(declaration)
P=&x;(initialization)
cout<<x;-->10
cout<<&x;-->(address of x)
cout<<P;-->content of P ie.(address of x)
cout<<&P;-->(address of P)
cout<<*P;-->(data where P is pointing ie. 10)--Dereferencing
*/

// Pointers are used to access the information from heap.Only pointers can access data from heap.
#include <iostream>
using namespace std;
int main(){
    // Heap memory allocation->
    int A[5]={1,2,3,4,5}//(stack)
    int *p;//(heap)
    p=new int [5];//(heap)
    A[2]=15;//(updation in stack)
    p[2]=12;// (updation in heap)
    //p is also created in stack with A[]
    // new means memory is allocated in heap
    // when new is used , memory is allocated in heap and this memory location is stored in pointer p which is in stack as program cannot directly access data from heap.

    // new array is created in heap
}
// data inside stack can be deleted automatically but  data in stack does not. so it must be deallocated  by --> delete []p;
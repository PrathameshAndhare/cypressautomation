// switch cases are used for writing menu driven programs
#include <iostream>
using namespace std;
int main()
{

    int day;
    cout << "Enter a day";
    cin >> day;
    switch (day)
    {
    case 1:
        cout << "Monday";
        break;

    case 2:
        cout << "Tuesday";
        break;

    case 3:
        cout << "Wednesday";
        break;

    default:
        cout << "Invalid"; //default case will run only when none of the cases are run 
        break;
    }

    return 0;
}
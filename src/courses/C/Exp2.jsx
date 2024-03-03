import React from "react";
import Navbar from "../../Components/Navbar";
import SideBar from "../../Components/SideBar";

const Exp2 = () => {
  return (
    <div>
      <Navbar />
      <SideBar sub="C Program" />
      <div className="content">
        <h2>C Experiment: Greatest of 3 Numbers</h2>
        <section>
          <p>
            <h3>Aim: </h3> To write a program in C to find the greatest among
            three numbers.
          </p>
        </section>
        <section>
          <h3>Algorithm</h3>
          <pre>
            {`
1. Start:
2. Declare three integer variables: num1, num2, and num3.
3. Display a prompt asking the user to enter three numbers.
4. Read and store the three numbers in num1, num2, and num3.
5. Use conditional statements to compare the numbers:
   - If num1 is greater than both num2 and num3, set greatest to num1.
   - If num2 is greater than both num1 and num3, set greatest to num2.
   - If num3 is greater than both num1 and num2, set greatest to num3.
6. Display the value of greatest as the result.
7. End.
            `}
          </pre>
        </section>
        <section>
          <h3>Program</h3>
          <pre>
            {`
#include <stdio.h>

int main() {
    // Initialize three variables to store the three numbers
    int num1, num2, num3;

    // Ask the user to input three numbers
    printf("Enter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);

    // Check and compare the values to find the greatest among them
    int greatest = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

    // Print the greatest number
    printf("The greatest number is: %d\\n", greatest);

    return 0;
}
            `}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default Exp2;

import React from "react";
import SideBar from "../../Components/SideBar";
import Navbar from "../../Components/Navbar";

const Exp1 = () => {
  const cProgram = `
#include <stdio.h>

// Function to generate Fibonacci sequence
void generateFibonacci(int n) {
    int first = 0, second = 0, next = 0;

    // Ask user for the number of terms
    printf("Enter the number of terms: ");
    scanf("%d", &n);

    // Print header
    printf("Fibonacci series up to %d terms:\\n", n);

    // Loop to generate Fibonacci sequence
    for (int i = 0; i < n; i++) {
        printf("%d ", first);
        next = first + second;
        first = second;
        second = next;
    }
}

int main() {
    int n;
    generateFibonacci(n);

    return 0;
}
`;

  return (
    <div>
      <Navbar />
      <SideBar sub="C Program" />
      <div className="content">
        <h2>C Experiment: Fibonacci</h2>
        <section>
          <p>
            <h3>Aim: </h3> To write a program in C to implement Fibonacci Series
          </p>
        </section>
        <section>
          <h3>Algorithm</h3>
          <pre>
            {`
1. Initialize three variables: first and second both to 0, and next to 0.
2. Ask the user to input the number of terms n they want in the Fibonacci series.
3. Print a header indicating that you are printing the Fibonacci series up to n terms.
4. Use a loop that runs n times
    - Print the value of first
    - Update next to the sum of first and second
    - Update first to the current value of second
    - Update second to the current value of next
5. End the program
            `}
          </pre>
        </section>
        <section>
          <h3>Program</h3>
          <pre>{cProgram}</pre>
        </section>
      </div>
    </div>
  );
};

export default Exp1;

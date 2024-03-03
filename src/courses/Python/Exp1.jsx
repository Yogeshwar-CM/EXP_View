import React from "react";
import SideBar from "../../Components/SideBar";
import Navbar from "../../Components/Navbar";

const PExp1 = () => {
  return (
    <div>
      <Navbar />
      <SideBar sub="Python Basics" />
      <div className="content">
        <h2>Python Experiment: Fibonacci Series</h2>
        <section>
          <p>
            <h3>Aim: </h3> To write a program in Python to implement the
            Fibonacci Series.
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
          <h3>Python Program</h3>
          <pre>
            {`# Python program to implement Fibonacci Series

# Function to generate Fibonacci sequence
def generate_fibonacci(n):
    first, second, next = 0, 0, 0
    
    # Ask user for the number of terms
    n = int(input("Enter the number of terms: "))
    
    # Print header
    print("Fibonacci series up to", n, "terms:")
    
    # Loop to generate Fibonacci sequence
    for i in range(n):
        print(first, end=" ")
        next = first + second
        first = second
        second = next

generate_fibonacci()
            `}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default PExp1;

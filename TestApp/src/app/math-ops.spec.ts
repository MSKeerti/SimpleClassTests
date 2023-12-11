import { MathOps } from './math-ops';

//Creation of a test suite
describe("Math Ops Test Suite", () => {

  //Common Arragement
    let num1=100;
    let num2=200;

  it("should add two numbers correctly",()=>{
    //Arrange-Act-Assert

    //Act-Call original function
    let result=MathOps.Add(num1,num2);

    //Assertion - Jasmine function expect()
    expect(result).toEqual(300);

  })

  it("should subtract two numbers correctly",()=>{
    //Act
    let result = MathOps.Subtract(num1,num2);
    //Assert
    expect(result).toEqual(-100);
  })

});
//Creation of a test case
//Assertion of a test case


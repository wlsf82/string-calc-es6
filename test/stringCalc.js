const test = require("unit.js");

const StringCalc = require("../stringCalculator");

describe("String calculator tests", () => {
  const stringCalc = new StringCalc();

  it("Empty list returns zero", () => {
    const returnedValued = stringCalc.add("");

    test.string(returnedValued).isEqualTo("0");
  });

  it("Single list returns list item", () => {
    const returnedValued = stringCalc.add(["1"]);

    test.string(returnedValued).isEqualTo("1");
  });

  it("List with two values. Values are added", () => {
    const returnedValued = stringCalc.add(["1, 2"]);

    test.string(returnedValued).isEqualTo("3");
  });

  it("List with ten values. Values are added",  () => {
    const returnedValued = stringCalc.add(["1, 2, 3, 1, 2, 3, 1, 2, 3, 0"]);

    test.string(returnedValued).isEqualTo("18");
  });

  it("Non numbers are not included in sum", () => {
    const returnedValued = stringCalc.add(["1, Aa, 3, 2"]);

    test.string(returnedValued).isEqualTo("6");
  });

  it("Non number string returns zero", () => {
    const returnedValued = stringCalc.add(["I'm not a number"]);

    test.string(returnedValued).isEqualTo("0");
  });

  it("Null string returns zero",  () => {
    const returnedValued = stringCalc.add(null);

    test.string(returnedValued).isEqualTo("0");
  });

  it("Negative values are correctly summed", () => {
    const returnedValued = stringCalc.add(["-2, -1"]);

    test.string(returnedValued).isEqualTo("-3");
  });

  it("Spaced numbers are correctly summed", () => {
    const returnedValued = stringCalc.add(["-2 -1"]);

    test.string(returnedValued).isEqualTo("-3");
  });

  it("Excessive spaced numbers are correctly summed", () => {
    const returnedValued = stringCalc.add(["-2  -1     5"]);

    test.string(returnedValued).isEqualTo("2");
  });

  it("Extreme numbers are removed", () => {
    const returnedValued = stringCalc.add(["-2 -1 101"]);

    test.string(returnedValued).isEqualTo("-3");
  });
});

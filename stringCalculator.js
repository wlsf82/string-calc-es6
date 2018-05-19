const stringCalculator = function() {
  this.add = list => {
    if (list == "" || list == null) {
      return "0";
    } else {
      let sum = 0;
      const values = { a: '0' };
      const strToInt = strNumber => {
        let strN = String(strNumber).trim();

        if (isNaN(strN)) strN = values[strN] || 0;

        return parseInt(strN);
      }

      const sumNumber = number => number > 100 ? sum += 0 : sum += number;

      list[0].split(/[ ,]+/).map(strToInt).forEach(sumNumber);
      return sum.toString();
    }
  };
};

module.exports = stringCalculator;

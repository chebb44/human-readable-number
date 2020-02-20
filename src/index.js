module.exports = function toReadable (number) {
  let map1 = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
  ];
  let map2 = [
    "XXX",
    "XXX",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  if (number >= 0 && number < 20) return (map1[number]);

  let arr = number.toString().split('').reverse();
  let out = [];

  if(number >= 20 && number <= 99){
    if (arr[0] > 0){
      out.push(map1[arr[0]]);
    }
    out.push(map2[arr[1]]);
    return out.reverse().join(' ');
  }

  let dec = +arr.slice(0,2).reverse().join('');

  if (number >= 100) {
      if (dec > 0 && dec <= 19){
        out.push(map1[dec]);
      }
      if(dec >= 20 && dec <= 99){
        if (arr[0] > 0){
          out.push(map1[arr[0]]);
        }
        out.push(map2[arr[1]]);
      }
      out.push('hundred');
      out.push(map1[arr[2]]);
    return out.reverse().join(' ');
  }
}

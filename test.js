const output = input.reduce(
  (a, b) => (input.filter((item) => b < item).length + 1 < 4 ? ++a : a),
  0
);

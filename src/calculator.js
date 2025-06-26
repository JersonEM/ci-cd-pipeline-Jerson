function sumar(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return NaN;
  return numA + numB;
}

function restar(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) return NaN;
  return numA - numB;
}

module.exports = { sumar, restar };

//second try
function isLockNessMonster(s) {
  return (
    s.includes("3.50") || s.includes("tree fiddy") || s.includes("three fifty")
  );
}

//first try
function isLockNessMonster(s) {
  if (
    s.includes("tree fiddy") ||
    s.includes("3.50") ||
    s.includes("three fifty")
  ) {
    return "Is Lockness Monster";
  }
}
function well(x) {
  function checkGoods(good) {
    return good === "good";
  }

  let result = x.filter(checkGoods);
  if (result.length === 0) {
    return "Fail!";
  } else if (result.length <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}

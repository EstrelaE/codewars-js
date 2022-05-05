//my solution
function magNumber(info) {
  const [weapon, street] = info;
  let magazines = 0;
  if (weapon === "PT92") {
    magazines = Math.ceil((street * 3) / 17);
  } else if (weapon === "M4A1") {
    magazines = Math.ceil((street * 3) / 30);
  } else if (weapon === "M16A2") {
    magazines = Math.ceil((street * 3) / 30);
  } else if (weapon === "PSG1") {
    magazines = Math.ceil((street * 3) / 5);
  }
}

//good solutions
magNumber = (info) =>
  Math.ceil(
    (info[1] * 3) / { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 }[info[0]]
  );

const magNumber = (info) => {
  const [gun, street] = info;
  let magzines = 0;
  switch (gun) {
    case "PT92":
      magzines = Math.ceil((street * 3) / 17);
      break;
    case "M4A1":
      magzines = Math.ceil((street * 3) / 30);
      break;
    case "M16A2":
      magzines = Math.ceil((street * 3) / 30);
      break;
    case "PSG1":
      magzines = Math.ceil((street * 3) / 5);
      break;
  }
  return magzines;
};

function magNumber(info) {
  [weapon, streets] = info;
  const weapons = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  };
  if (3 * streets <= weapons[weapon]) return 1;
  else {
    let n = 1;
    while (weapons[weapon] * n < streets * 3) n++;
    return n;
  }
}

function magNumber(info) {
  const dict = { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 };
  return Math.ceil((info[1] * 3) / dict[info[0]]);
}

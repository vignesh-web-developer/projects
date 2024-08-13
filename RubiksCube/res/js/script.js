let sidesColor = [
  { "up-color": "yellow" },
  { "down-color": "white" },
  { "front-color": "green" },
  { "back-color": "blue" },
  { "left-color": "orange" },
  { "right-color": "red" },
];
//top layer up move
const upMoveButton = document.querySelector(".upMove");

const rotateTopLayer = () => {
  const top = document.querySelector(".top");
  const currentTransform = top.style.transform;
  let currentRotation = 0;

  const zRoatationMatch = currentTransform.match(/rotateZ\(([-\d.]+)deg\)/);
  if (zRoatationMatch) {
    currentRotation = parseFloat(zRoatationMatch[1]);
  }

  currentRotation += 90;

  top.style.transform = `rotateX(90deg) rotateZ(${currentRotation}deg)`;

  moveCell1("red1");
  moveCell1("green1");
  moveCell1("orange1");
  moveCell1("blue1");
  moveCell2("red2");
  moveCell2("green2");
  moveCell2("orange2");
  moveCell2("blue2");

  moveCell3("red3");
  moveCell3("green3");
  moveCell3("orange3");
  moveCell3("blue3");

  top.style.transition = "transform 2s ease-in-out";
};

const moveCell1 = (cell) => {
  const element1 = document.querySelector(`.${cell}`);

  const currentTransform = element1.style.transform;

  let currentRotation = 0;
  const yRoatationMatch = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
  if (yRoatationMatch) {
    currentRotation = parseFloat(yRoatationMatch[1]);
  }

  let currentXTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentXTranslate = -250;
    } else if (parseFloat(xTranslateMatch[1]) == -250) {
      currentXTranslate = -200;
    } else if (parseFloat(xTranslateMatch[1]) == -200) {
      currentXTranslate = 50.5;
    } else if (parseFloat(xTranslateMatch[1]) == 50.5) {
      currentXTranslate = 0;
    }
  } else {
    currentXTranslate = -250;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 52;
    } else if (parseFloat(zTranslateMatch[1]) == 52) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 250;
    } else if (parseFloat(zTranslateMatch[1]) == 250) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 52;
  }

  currentRotation -= 90;

  element1.style.transform = `rotateY(${currentRotation}deg) translateX(${currentXTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element1.style.transition = "transform 2s ease-in-out";
};

const moveCell2 = (cell) => {
  const element2 = document.querySelector(`.${cell}`);

  const currentTransform = element2.style.transform;

  let currentRotation = 0;
  const yRoatationMatch = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
  if (yRoatationMatch) {
    currentRotation = parseFloat(yRoatationMatch[1]);
  }

  let currentXTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentXTranslate = -150.5;
    } else if (parseFloat(xTranslateMatch[1]) == -150.5) {
      currentXTranslate = 0.5;
    } else if (parseFloat(xTranslateMatch[1]) == 0.5) {
      currentXTranslate = 150.5;
    } else if (parseFloat(xTranslateMatch[1]) == 150.5) {
      currentXTranslate = 0;
    }
  } else {
    currentXTranslate = -150.5;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 152;
    } else if (parseFloat(zTranslateMatch[1]) == 152) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 150;
    } else if (parseFloat(zTranslateMatch[1]) == 150) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 152;
  }

  currentRotation -= 90;

  element2.style.transform = `rotateY(${currentRotation}deg) translateX(${currentXTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element2.style.transition = "transform 2s ease-in-out";
};

const moveCell3 = (cell) => {
  const element3 = document.querySelector(`.${cell}`);

  const currentTransform = element3.style.transform;

  let currentRotation = 0;
  const yRoatationMatch = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
  if (yRoatationMatch) {
    currentRotation = parseFloat(yRoatationMatch[1]);
  }

  let currentXTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentXTranslate = -50.5;
    } else if (parseFloat(xTranslateMatch[1]) == -50.5) {
      currentXTranslate = 200;
    } else if (parseFloat(xTranslateMatch[1]) == 200) {
      currentXTranslate = 250.5;
    } else if (parseFloat(xTranslateMatch[1]) == 250.5) {
      currentXTranslate = 0;
    }
  } else {
    currentXTranslate = -50.5;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 252;
    } else if (parseFloat(zTranslateMatch[1]) == 252) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 50;
    } else if (parseFloat(zTranslateMatch[1]) == 50) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 252;
  }

  currentRotation -= 90;

  element3.style.transform = `rotateY(${currentRotation}deg) translateX(${currentXTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element3.style.transition = "transform 2s ease-in-out";
};

upMoveButton.addEventListener("click", rotateTopLayer);

//top layer up move prime
const upPrimeButton = document.querySelector(".upPrime");

const rotateTopLayerReverse = () => {
  const top = document.querySelector(".top");
  const currentTransform = top.style.transform;
  let currentRotation = 0;

  const zRoatationMatch = currentTransform.match(/rotateZ\(([-\d.]+)deg\)/);
  if (zRoatationMatch) {
    currentRotation = parseFloat(zRoatationMatch[1]);
  }
  currentRotation += -90;

  moveCell1Reverse("red1");
  moveCell1Reverse("green1");
  moveCell1Reverse("orange1");
  moveCell1Reverse("blue1");
  moveCell2Reverse("red2");
  moveCell2Reverse("green2");
  moveCell2Reverse("orange2");
  moveCell2Reverse("blue2");
  moveCell3Reverse("red3");
  moveCell3Reverse("green3");
  moveCell3Reverse("orange3");
  moveCell3Reverse("blue3");

  top.style.transform = `rotateX(90deg) rotateZ(${currentRotation}deg)`;
  top.style.transition = "transform 2s ease-in-out";
};

const moveCell1Reverse = (cell) => {
  const element1 = document.querySelector(`.${cell}`);

  const currentTransform = element1.style.transform;

  let currentRotation = 0;
  const yRoatationMatch = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
  if (yRoatationMatch) {
    currentRotation = parseFloat(yRoatationMatch[1]);
  }

  let currentXTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentXTranslate = 50.5;
    } else if (parseFloat(xTranslateMatch[1]) == 50.5) {
      currentXTranslate = -200;
    } else if (parseFloat(xTranslateMatch[1]) == -200) {
      currentXTranslate = -250;
    } else if (parseFloat(xTranslateMatch[1]) == -250) {
      currentXTranslate = 0;
    }
  } else {
    currentXTranslate = 50.5;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 250;
    } else if (parseFloat(zTranslateMatch[1]) == 250) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 52;
    } else if (parseFloat(zTranslateMatch[1]) == 52) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 250;
  }

  currentRotation += 90;

  element1.style.transform = `rotateY(${currentRotation}deg) translateX(${currentXTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element1.style.transition = "transform 2s ease-in-out";
};
const moveCell2Reverse = (cell) => {
  const element2 = document.querySelector(`.${cell}`);

  const currentTransform = element2.style.transform;

  let currentRotation = 0;
  const yRoatationMatch = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
  if (yRoatationMatch) {
    currentRotation = parseFloat(yRoatationMatch[1]);
  }

  let currentXTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentXTranslate = 150.5;
    } else if (parseFloat(xTranslateMatch[1]) == 150.5) {
      currentXTranslate = 0.5;
    } else if (parseFloat(xTranslateMatch[1]) == 0.5) {
      currentXTranslate = -150.5;
    } else if (parseFloat(xTranslateMatch[1]) == -150.5) {
      currentXTranslate = 0;
    }
  } else {
    currentXTranslate = 150.5;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 150;
    } else if (parseFloat(zTranslateMatch[1]) == 150) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 152;
    } else if (parseFloat(zTranslateMatch[1]) == 152) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 150;
  }

  currentRotation += 90;

  element2.style.transform = `rotateY(${currentRotation}deg) translateX(${currentXTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element2.style.transition = "transform 2s ease-in-out";
};
const moveCell3Reverse = (cell) => {
  const element3 = document.querySelector(`.${cell}`);

  const currentTransform = element3.style.transform;

  let currentRotation = 0;
  const yRoatationMatch = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
  if (yRoatationMatch) {
    currentRotation = parseFloat(yRoatationMatch[1]);
  }

  let currentXTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateX\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentXTranslate = 250.5;
    } else if (parseFloat(xTranslateMatch[1]) == 250.5) {
      currentXTranslate = 200;
    } else if (parseFloat(xTranslateMatch[1]) == 200) {
      currentXTranslate = -50.5;
    } else if (parseFloat(xTranslateMatch[1]) == -50.5) {
      currentXTranslate = 0;
    }
  } else {
    currentXTranslate = 250.5;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 50;
    } else if (parseFloat(zTranslateMatch[1]) == 50) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 252;
    } else if (parseFloat(zTranslateMatch[1]) == 252) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 50;
  }

  currentRotation += 90;

  element3.style.transform = `rotateY(${currentRotation}deg) translateX(${currentXTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element3.style.transition = "transform 2s ease-in-out";
};

upPrimeButton.addEventListener("click", rotateTopLayerReverse);

//front face move
const frontMoveButton = document.querySelector(".frontMove");

const rotateFrontLayer = () => {
  const top = document.querySelector(".front");
  const currentTransform = top.style.transform;
  let currentRotation = 0;

  const zRoatationMatch = currentTransform.match(/rotateZ\(([-\d.]+)deg\)/);
  if (zRoatationMatch) {
    currentRotation = parseFloat(zRoatationMatch[1]);
  }
  currentRotation += -90;

  // moveCell1Reverse("red1");
  // moveCell1Reverse("green1");
  // moveCell1Reverse("orange1");
  // moveCell1Reverse("blue1");
  // moveCell2Reverse("red2");
  // moveCell2Reverse("green2");
  // moveCell2Reverse("orange2");
  // moveCell2Reverse("blue2");
  // moveCell3Reverse("red3");
  // moveCell3Reverse("green3");
  // moveCell3Reverse("orange3");
  // moveCell3Reverse("blue3");

  top.style.transform = `rotateX(90deg) rotateZ(${currentRotation}deg)`;
  top.style.transition = "transform 2s ease-in-out";
};

frontMoveButton.addEventListener("click", rotateFrontLayer);
const frontMove = (cell) => {
  const element1 = document.querySelector(`.${cell}`);

  const currentTransform = element1.style.transform;

  let currentRotation = 0;
  const xRoatationMatch = currentTransform.match(/rotateX\(([-\d.]+)deg\)/);
  if (xRoatationMatch) {
    currentRotation = parseFloat(xRoatationMatch[1]);
  }

  let currentYTranslate = 0;
  const xTranslateMatch = currentTransform.match(/translateY\(([-\d.]+)px\)/);
  if (xTranslateMatch) {
    if (parseFloat(xTranslateMatch[1]) == 0) {
      currentYTranslate = 50.5;
    } else if (parseFloat(xTranslateMatch[1]) == 50.5) {
      currentYTranslate = -200;
    } else if (parseFloat(xTranslateMatch[1]) == -200) {
      currentYTranslate = -250;
    } else if (parseFloat(xTranslateMatch[1]) == -250) {
      currentYTranslate = 0;
    }
  } else {
    currentYTranslate = 50.5;
  }

  let currentZTranslate = 0;
  const zTranslateMatch = currentTransform.match(/translateZ\(([-\d.]+)px\)/);
  if (zTranslateMatch) {
    if (parseFloat(zTranslateMatch[1]) == 0) {
      currentZTranslate = 251;
    } else if (parseFloat(zTranslateMatch[1]) == 251) {
      currentZTranslate = 300;
    } else if (parseFloat(zTranslateMatch[1]) == 300) {
      currentZTranslate = 52;
    } else if (parseFloat(zTranslateMatch[1]) == 52) {
      currentZTranslate = 0;
    }
  } else {
    currentZTranslate = 251;
  }

  currentRotation -= 90;

  element1.style.transform = `rotateX(${currentRotation}deg) translateY(${currentYTranslate}px) translateZ(${currentZTranslate}px) translateY(0px)`;

  element1.style.transition = "transform 2s ease-in-out";
};

//
const downMove = () => {};
const rightMove = () => {};
const leftMove = () => {};

const backMove = () => {};

const downPrime = () => {};
const rightPrime = () => {};
const leftPrime = () => {};
const frontPrime = () => {};
const backPrime = () => {};

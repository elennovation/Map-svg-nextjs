const generateOkresy = (): string[] => {
  const okresy = [];
  for (let i = 0; i < Math.floor((Math.random() * 10) + 1); i++) {
    okresy.push(Math.random().toString(36).substring(7));
  }
  return okresy;
};

const getOkresy = (): {[key: string]: string[]} => {
  const okresy: {[key: string]: string[]} = {
    jc: generateOkresy(),
    jm: generateOkresy(),
    ka: generateOkresy(),
    kr: generateOkresy(),
    li: generateOkresy(),
    mo: generateOkresy(),
    ol: generateOkresy(),
    pa: generateOkresy(),
    zl: generateOkresy(),
    pl: generateOkresy(),
    pr: generateOkresy(),
    st: generateOkresy(),
    us: generateOkresy(),
    vy: generateOkresy()
  };
  return okresy;
};

export const okresy = getOkresy();

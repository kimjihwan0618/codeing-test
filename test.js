function solution(h1, m1, s1, h2, m2, s2) {
  var count = 0;
  const current = {
    h: h1,
    m: m1,
    s: s1,
  }
  for (let h = h1; h < 24; h++) {
    for (let m = m1; m < 60; m++) {
      current["s"] === 60 && current["s"] = 1;
      for (let s = s1; s < 60; s++) {
        current["s"] += 1
        if (current["h"] === h2 && current["m"] === m2 && current["s"] === s2) {
          return;
        }
      }
    }
  }
  return count;
}

solution(0, 5, 30, 0, 7, 0) //2
solution(12, 0, 0, 12, 0, 30) //1
solution(0, 6, 1, 0, 6, 6) //0
solution(11, 59, 30, 12, 0, 0) //1
solution(11, 58, 59, 11, 59, 0) //1
solution(1, 5, 5, 1, 5, 6) //2
solution(0, 0, 0, 23, 59, 59) //2852
function islandSurvival(s, n, m) {
  if ((n * 6 < m * 7 && s > 6) || m > n) console.log("No");
  else {
    let days = (m * s) / n;

    if ((m * s) % n != 0) days++;

    console.log("Yes " + Math.round(days));
  }
}

let s = 10, n = 16, m = 2;
islandSurvival(s, n, m);

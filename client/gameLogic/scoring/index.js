export function updateScore (prevScore, rowsRemoved) {
  return prevScore + getScoreForRows(rowsRemoved)
}

function getScoreForRows (rows) {
  if (rows === 4) return 500
  return rows * 100
}

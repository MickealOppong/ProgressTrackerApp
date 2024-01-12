export const getOverallProgress = (list) => {
  let score = 0;
  for (let i = 0; i < list.length; i++) {
    score += list[i].progress;

  }
  return score / list.length;
}
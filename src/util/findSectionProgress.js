export const findSectionProgress = (subsections) => {
  let completed = 0;
  for (let i of subsections) {
    if (i.completed) {
      completed++;
    }

  }
  return Math.round((completed / subsections.length) * 100);
}
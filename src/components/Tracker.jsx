import { useEffect, useState } from 'react';
import { trackerList } from '../util/data';
import { findSectionProgress } from '../util/findSectionProgress';
import { getOverallProgress } from '../util/getOverallProgress';
import ProgressBar from './ProgressBar';
import Task from "./Task";
const Tracker = () => {
  const [list, setList] = useState(trackerList)
  const [overallProgress, setOverallProgress] = useState(0);

  const updateList = (index, subIndex) => {
    const newList = [...list];
    newList[index].subsections[subIndex].completed =
      !trackerList[index].subsections[subIndex].completed
    newList[index].progress = findSectionProgress(newList[index].subsections);
    setList(newList);
    localStorage.setItem('trackerList', JSON.stringify(list));
  }

  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem('trackerList')) || [];
    setList(localList.length !== 0 ? localList : trackerList);
  }, [])

  useEffect(() => {
    setOverallProgress(getOverallProgress(list));
  }, [list])

  return <section className='tracker'>
    <ProgressBar overallProgress={overallProgress} />
    {
      list.map((item, index) => {
        const { id, title, progress, subsections } = item
        return < Task key={id} title={title} progress={progress} subsections={subsections} updateList={updateList} index={index} />
      })
    }
  </section>
}
export default Tracker;
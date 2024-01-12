import { myProgress } from "../util/myProgress";

const ProgressBar = ({ overallProgress }) => {
  const value = myProgress(overallProgress)
  return <div className="progress-container">
    <p className="text">progress:   {overallProgress}%</p>
    <div id="myBar" style={{ width: `${value}px` }}></div>
  </div>
}
export default ProgressBar;
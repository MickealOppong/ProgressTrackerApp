//import { list } from '../util/data';
import { useState } from "react";
import CloseBtn from './CloseBtn';
import OpenBtn from './OpenBtn';


const Task = ({ title, progress, subsections, updateList, index }) => {
  const [open, setOpen] = useState(false)


  const handleClick = () => {
    if (!open) {
      setOpen(true)
      return;
    }
    setOpen(false);
  }


  return (
    <section className="task">
      <article className="task-container">
        <div className="header">
          <p>{title}</p>
          <div className="sub-div">
            <span>{progress}%</span>
            {
              open ? <CloseBtn onClick={handleClick} /> : <OpenBtn onClick={handleClick} />
            }

          </div>

        </div>
        {
          open && subsections.map((sub, subIndex) => {

            const { subtitle, completed } = sub;
            return (<div className="todo-items" key={subIndex}>
              <p>{subIndex}.{subtitle}</p>
              <input type="checkbox" onChange={() => {
                updateList(index, subIndex)
              }} checked={completed} />
            </div>)
          })

        }
      </article>
    </section>
  )
}
export default Task;
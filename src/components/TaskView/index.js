import React, { createRef, useContext, useState } from 'react';

import { MainContext } from '../../store';
import { addTask, updateTaskStatus, resetTimerStatistics } from '../../actions';
import GithubLogo from '../../assets/images/github-logo.svg';

const TaskView = () => {
  const { state, dispatch } = useContext(MainContext);
  const [value, setValue] = useState('');
  const inputRef = createRef();

  const saveTask = (e) => {
    e.preventDefault();

    if (value.length > 0) {
      dispatch(addTask({ title: value, isDone: false }));
      setValue('');
      inputRef.current.focus();
    }
  };

  const handleInputValue = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

  const handleTaskDone = (index, { target: { checked } }) => {
    dispatch(updateTaskStatus(index, checked));
  };

  const resetStatistics = () => {
    dispatch(resetTimerStatistics());
  };

  return (
    <div className="taskview">
      <div className="taskview-wrapper">
        <div className="taskview-header">
          <button onClick={resetStatistics} className="btn is-small" type="button">Reset</button>
          <div className="taskview-header-right">
            <div>
              { state.timer.sessions }
              <span>Pomodoro</span>
            </div>
            <div>
              { state.tasks.list.filter((item) => item.isDone).length }
              <span>Completed</span>
            </div>
            <a href="https://github.com/erdemuslu/stay-focused">
              <img alt="github-logo" src={GithubLogo} />
            </a>
          </div>
        </div>
        <form
          onSubmit={saveTask}
        >
          <div>
            <input ref={inputRef} value={value} onChange={handleInputValue} type="text" name="task" placeholder="Typo something" />
            <button type="submit">Add</button>
          </div>
        </form>
        <div className="taskview-list">
          {
            state.tasks.list.length > 0
              ? state.tasks.list.map((item, index) => {
                const key = index.toString();
                return (
                  <div
                    key={key}
                    className="taskview-list__item"
                  >
                    <input onChange={handleTaskDone.bind(this, index)} type="checkbox" id={`item_${index}`} checked={item.isDone} />
                    <label htmlFor={`item_${index}`}>{item.title}</label>
                  </div>
                );
              })
              : <div className="taskview-list-empty">No Tasks</div>
          }
        </div>
      </div>
    </div>
  );
};

export default TaskView;

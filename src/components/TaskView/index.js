import React, { useContext, useState } from 'react';

import { MainContext } from '../../store';
import { addTask } from '../../actions';

const TaskView = () => {
  const { state, dispatch } = useContext(MainContext);
  const [value, setValue] = useState('');

  const saveTask = (e) => {
    e.preventDefault();

    if (value.length > 0) {
      dispatch(addTask({ title: value, isDone: false }));
      setValue('');
    }
  };

  const handleInputValue = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

  return (
    <div className="taskview">
      <div className="taskview-wrapper">
        <form
          onSubmit={saveTask}
        >
          <div>
            <input value={value} onChange={handleInputValue} type="text" name="task" placeholder="Typo to task" />
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
                  >
                    {item.title}
                  </div>
                );
              })
              : null
          }
        </div>
      </div>
    </div>
  );
};

export default TaskView;

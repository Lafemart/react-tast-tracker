import { useState } from "react";
import Button from "./CustomButton";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onChangeTextHandler = (event) => {
    setText(event.target.value);
  };

  const onChangeDayHandler = (event) => {
    setDay(event.target.value);
  };

  const onChangeReminderHandler = (event) => {
    setReminder(event.currentTarget.checked);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          onChange={onChangeTextHandler}
          placeholder="add Task"
          value={text}
          type="text"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="">{"Select a date"}</label>
        <input
          onChange={onChangeDayHandler}
          placeholder="Select a date"
          type="date"
          value={day}
          required
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">{"Set Reminder"}</label>
        <div className="input-container">
          <input
            onChange={onChangeReminderHandler}
            checked={reminder}
            value={reminder}
            type="checkbox"
          />
        </div>
      </div>
      <Button primary width={"100%"}>
        {"Login"}
      </Button>
    </form>
  );
};

export default AddTask;

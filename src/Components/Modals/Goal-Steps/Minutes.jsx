import React, { useState } from 'react';

function Minutes(props) {
  return (
    <div className="practice-time">
      <input
        type="number"
        name="practice-time"
        value={props.formData.practiceTime}
        onChange={(e) =>
          props.setFormData({ ...props.formData, practiceTime: e.target.value })
        }
      />
    </div>
  );
}

export default Minutes;

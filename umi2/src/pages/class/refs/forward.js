import React, { forwardRef } from 'react';

const InputForward = forwardRef((props, ref) => {
  return (
    <div>
      姓名: <input ref={ref} />
    </div>
  );
});

export default InputForward;

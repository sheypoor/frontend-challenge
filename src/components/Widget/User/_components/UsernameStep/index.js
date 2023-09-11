/** @format */

import TextInput from "../../../../UI/Inputs/TextInput";

const UsernameStep = ({ dispatch, error, username, age }) => {
  return (
    <>
      <TextInput
        name='username'
        placeholder='نام کاربری'
        onChange={(e) =>
          dispatch({ type: "USER_NAME", payload: e.target.value })
        }
        error={error}
        value={username}
      />
      <TextInput
        name='age'
        placeholder='سن'
        onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })}
        value={age}
        error={error}
      />
    </>
  );
};

export default UsernameStep;

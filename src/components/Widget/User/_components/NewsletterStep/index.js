/** @format */

import TextInput from "../../../../UI/Inputs/TextInput";
import Select from "../../../../UI/Inputs/Select";

const NewsletterStep = ({ dispatch, email, newsletter, error }) => {
  return (
    <>
      <TextInput
        name='email'
        placeholder='آدرس ایمیل'
        onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })}
        value={email}
        error={error}
      />
      <Select
        newsletter={newsletter}
        onChange={(e) =>
          dispatch({ type: "NEWS_LETTER", payload: e.target.value })
        }
      />
    </>
  );
};

export default NewsletterStep;

import React from "react";
import SelectInput from "./common/SelectInput";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />
      <SelectInput
        label="Authors"
        id="authorId"
        name="authorId"
        onChange={props.onChange}
        value={parseInt(props.course.authorId, 10)}
        options={props.authors}
        error={props.errors.authorId}
      />

      <TextInput
        label="Category"
        id="category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default CourseForm;

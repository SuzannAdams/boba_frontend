import React from 'react';

const Form = ({ meet, handleSubmit, handleChange }) => (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        name="name"
        placeholder="Name"
        value={meet.name}
        onChange={handleChange}
        required
        id="name"
      />
      <label htmlFor="place"></label>
      <input
        name="place"
        placeholder="Place"
        value={meet.place}
        onChange={handleChange}
        required
        id="place"
      />
      <label htmlFor="time"></label>
      <input
        name="time"
        placeholder="Time"
        value={meet.time}
        onChange={handleChange}
        required
        id="time"
      />
      <label htmlFor="topic"></label>
      <input
        name="topic"
        placeholder="Topic"
        value={meet.topic}
        onChange={handleChange}
        required
        id="topic"
      />
      <label htmlFor="image"></label>
      <input
        name="image"
        placeholder="Image Link"
        value={meet.image}
        onChange={handleChange}
        required
        id="image"
      />

      <button id="submit-button" type="submit">
        Submit
      </button>
    </form>
  </div>
);

export default Form;

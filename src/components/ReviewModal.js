import React, { useState } from "react";

export default function ReviewModal({ closeReviewModal, onSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    review: "",
  });

  const validateForm = () => {
    if (formState.name && formState.review) {
      return true;
    } else {
      return;
    }
  };

  /* targets info to update */
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  /* prevents update  on submit (rerenders)*/
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  if (!validateForm()) return;

  /* posts new info */
  onSubmit(formState);

  closeReviewModal();

  return (
    <div
      class="modal-container"
      onClick={(e) => {
        if (e.target.class === "modal-container") closeReviewModal();
      }}
    >
      <div class="modalForm">
        <form>
          <div class="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" value={formState.name} onChange={handleChange} />
          </div>
          <div class="form-group">
            <label htmlFor="review">Leave Review</label>
            <textarea
              name="review"
              value={formState.review}
              onChange={handleChange}
            />
          </div>
          <button type="submit" class="btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

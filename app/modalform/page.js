import React from 'react';
import './ModalForm.css';
const page = () => {
  return (
    <>
      <div className="modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default page;

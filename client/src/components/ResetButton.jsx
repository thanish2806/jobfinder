import React from "react";
import styled from "styled-components";

const Button = ({ Onclick }) => {
  return (
    <StyledWrapper>
      <button type="button" className="button" onClick={Onclick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-arrow-repeat"
          viewBox="0 0 16 16"
        >
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
          <path
            fillRule="evenodd"
            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
          />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    color: black;
    background-color: white;
    font-weight: 500;
    border-radius: 0.5rem;
    font-size: 1.1rem; /* slightly bigger font */
    cursor: pointer;
    text-align: center;
    display: inline-flex;
    align-items: center;
    border: none;
    height: 50px; /* optional fixed height */
  }

  .button:hover {
    background-color: #f0f0f0; /* light gray hover */
  }

  .button svg {
    display: inline;
    width: 30px; /* adjusted */
    height: 30px; /* adjusted */
    margin-right: 0.75rem;
    color: black;
  }

  .button:focus svg {
    animation: spin_357 0.5s linear;
  }

  @keyframes spin_357 {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export default Button;

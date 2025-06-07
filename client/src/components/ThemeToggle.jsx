
import React from 'react';
import styled from 'styled-components';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <StyledWrapper>
      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="checkbox" checked={!isDark} // checkbox ON when it's not dark mode
          onChange={onToggle}/>
          <span className="slider" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .toggle-switch {
  position: relative;
  width: 60px;       /* reduced from 100px */
  height: 30px;      /* reduced from 50px */
  --light: #d8dbe0;
  --dark: #28292c;
  --link: rgb(27, 129, 112);
  --link-hover: rgb(24, 94, 82);
}

.switch-label {
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: var(--dark);
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid var(--dark);  /* slightly thinner */
}

.checkbox {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: 0.3s;
}

.checkbox:checked ~ .slider {
  background-color: var(--light);
}

.slider::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;       /* reduced from 25px */
  height: 20px;
  border-radius: 50%;
  box-shadow: inset 8px -3px 0px 0px var(--light);  /* adjusted shadow */
  background-color: var(--dark);
  transition: 0.3s;
}

.checkbox:checked ~ .slider::before {
  transform: translateX(30px);  /* adjusted from 50px */
  background-color: var(--dark);
  box-shadow: none;
}`;


export default ThemeToggle;

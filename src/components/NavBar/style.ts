import styled from "styled-components";

export const header = styled.header`
  position: absolute;
  left: 0;

  width: 100px;
  height: 100%;

  color: var(--white);
  background: var(--bg);
  box-shadow: 25px 25px 75px var(--black-opaque-1), 10px 10px 70px var(--black-opaque-1),
    inset 5px 5px 10px var(--black-opaque-2), inset 5px 5px 20px var(--white-opaque-1),
    inset -5px -5px 15px var(--black-opaque-3);
`;

export const ul = styled.ul`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const a = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const icon = styled.span`
  position: absolute;

  color: var(--grey);
  font-size: 1.75em;

  width: 80px;
  height: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    inset: 10px;

    background: var(--bg);
    border-radius: 50%;
    box-shadow: 5px 5px 7px var(--black-opaque-1), inset 2px 2px 3px var(--white-opaque-2),
      inset -3px -3px 5px var(--black-opaque-2);

    transform: scale(0);
    transition: 0.5s;
  }

  > svg {
    position: relative;
    z-index: 9;
  }
`;

export const span = styled.span`
  text-transform: capitalize;

  position: absolute;
  left: 80px;

  font-size: 1.5rem;

  color: var(--bg);
  background: var(--aqua);
  box-shadow: 5px 5px 7px var(--black-opaque-1), inset -3px -3px 5px var(--black-opaque-2);

  padding: 4px 15px;
  border-radius: 15px;

  opacity: 0;
  visibility: hidden;
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -4px;

    width: 10px;
    height: 10px;

    transform: translateY(-50%) rotate(45deg);
    border-radius: 2px;
    background: var(--aqua);
  }
`;

export const li = styled.li`
  position: relative;

  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  margin: 0 5px;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: calc(50% - 2.5px);

    width: 5px;
    height: 5px;

    border-radius: 50%;
    transition: 0.5s;
  }

  &:hover {
    cursor: pointer;

    ${icon} {
      color: var(--aqua);
    }

    ${span} {
      opacity: 1;
      visibility: visible;
      left: 100px;
    }
  }

  &.active {
    ${icon} {
      transform: translateX(45px);

      background: var(--aqua);
      color: var(--white);
      box-shadow: 5px 5px 7px var(--black-opaque-1), inset 2px 2px 3px var(--white-opaque-2),
        inset -3px -3px 5px var(--black-opaque-2);

      &::before {
        transform: scale(1);
      }
    }

    &:hover ${span} {
      opacity: 1;
      visibility: visible;
      left: 140px;
    }
  }

  &.active::before {
    background: var(--aqua);
    box-shadow: 0 0 5px var(--aqua), 0 0 10px var(--aqua), 0 0 20px var(--aqua),
      0 0 30px var(--aqua), 0 0 40px var(--aqua), 0 0 50px var(--aqua);
  }
`;

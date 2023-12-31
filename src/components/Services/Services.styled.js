import styled from "styled-components";

export const Service = styled.div`
  margin-top: 2.5rem;
  h1 {
    margin: 2rem 0;
    font-family: "Poppins", san-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #514d59;
  }
  @media (max-width: 968px) {
    padding: 0 auto;
    width: 100%;
    display: grid;
    align-items: center;
    margin: 2.5rem auto;
  }
  @media (max-width: 500px) {
    padding: 0 auto;
    width: 100%;
    display: grid;
    align-items: center;
    margin: 2.5rem auto;
  }
`;

export const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 24px;
  justify-items: center;
  transform: translateX(-7px);

  div {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 80%;
    row-gap: 1rem;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 20px 60px 0px rgba(255, 210, 75, 0.12);
    padding: 28px 25px 30px 30px;
    img {
      width: 20%;
    }

    h2 {
      font-family: "Poppins", san-serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--Dark, #25282b);
    }

    p {
      font-family: "Poppins", san-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
      color: #898989;
    }
  }
  @media (max-width: 868px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    justify-content: center;
    align-items: center;
    column-gap: 64px;
    row-gap: 10px;

    div {
      border-radius: 5.68px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;
    }
    h2 {
      color: #25282b;
    }
    p {
      position: relative;
      bottom: 50px;
      line-height: 18px;
      font-size: 13px;
      max-width: 343px;
    }
  }

  div:nth-child(1) {
    box-shadow: 0px 20px 60px 0px rgba(255, 210, 75, 0.12);
  }

  div:nth-child(2) {
    box-shadow: 0px 20px 60px 0px rgba(0, 255, 117, 0.12);
  }

  div:nth-child(3) {
    box-shadow: 0px 20px 60px 0px rgba(71, 135, 243, 0.12);
  }

  div:nth-child(4) {
    box-shadow: 0px 20px 60px 0px rgba(255, 114, 98, 0.12);
  }

  // MOBILE !!
  @media (max-width: 550px) {
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    padding: 28px auto 30px;
    gap: 24px;

    div {
      border-radius: 5.68px;
      display: flex;
      max-width: 100%;
      padding: 28px auto 28px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;
      height: auto;
    }
  }
`;

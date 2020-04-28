import React from "react";
import styled from "styled-components";

import topLeft from "./images/top-left.svg";
import centerLeft from "./images/center-left.svg";
import centerRight from "./images/center-right.svg";
import bottomLeft from "./images/bottom-left.svg";
import bottom from "./images/bottom.svg";

import listing from "./images/home.jpg";

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: url(${centerLeft}) no-repeat bottom 70% left,
    url(${bottomLeft}) no-repeat bottom left, url(${bottom}) no-repeat bottom,
    url(${centerRight}) no-repeat top 70% right,
    url(${topLeft}) no-repeat top 5% left 70%;

  background-size: 20%, 20%, 20%, 20%, 20%;
`;
const ListingContainer = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1280px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0 5px #06d6a0ff;
    border-radius: 20px;
  }
`;
const ImageContainer = styled.section`
  @media screen and (min-width: 768px) {
    width: 50%;
    order: 2;
  }
`;
const ListingImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const MetadataContainer = styled.section`
  padding: 1em;
  font-weight: bold;
  background-color: #073b4c;
  color: white;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p:first-child {
    font-size: 1.5em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    order: 1;
  }
`;

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  order: 3;
  margin-bottom: 1em;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-bottom: 0;
  }
`;
const InfoGroup = styled.section`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  box-shadow: 0 0 5px #06d6a0ff;
  margin-top: 1em;
  background: #f6f4f3;

  &:last-child section {
    border: none;
  }

  &:last-child section:last-child {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0;
    box-shadow: none;
  }
`;

const Info = styled.section`
  width: 50%;
  text-align: center;

  border: 0.1px solid #2193b0;
  border-collapse: collapse;
  & p {
    font-size: 1em;
    margin: 10px;
  }
  & p:last-child {
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const ActionButton = styled.button`
  padding: 1em;
  font-weight: bold;
  box-shadow: none;
  color: white;
  background: #ef476fff;
  transition: all 0.5s ease-in-out;
  border: 0.5px solid #ef476fff;

  &:hover {
    color: #ef476fff;
    background: white;
    font-weight: bolder;
  }
`;

const SingleListing = () => {
  return (
    <BackgroundContainer>
      <ListingContainer>
        <ImageContainer>
          <ListingImage src={listing} />
        </ImageContainer>
        <MetadataContainer>
          <p>2 bedroom, 1 bathroom apartment</p>
          <p>
            <i className="fas fa-map-marker-alt" /> Agunbelewo, Osogbo, Osun
            state
          </p>
        </MetadataContainer>
        <InfoContainer>
          <InfoGroup>
            <Info>
              <p>
                <i className="fas fa-paw" />
              </p>
              <p>Pets Allowed</p>
              <p>Yes</p>
            </Info>
            <Info>
              <p>
                <i className="fas fa-paint-roller" />
              </p>
              <p>Painted</p>
              <p>No</p>
            </Info>
            <Info>
              <p>
                <i className="fas fa-layer-group" />
              </p>
              <p>Tiled</p>
              <p>Yes</p>
            </Info>
            <Info>
              <p>
                <i className="fas fa-warehouse" />
              </p>
              <p>Parking</p>
              <p>No</p>
            </Info>
          </InfoGroup>
          <InfoGroup>
            <Info>
              <p>Monthly Rent</p>
              <p>$300, 000</p>
            </Info>
            <Info>
              <p>Status</p>
              <p>Available</p>
            </Info>
            <Info>
              <a href="tel:09031805967">
                <ActionButton type="button">Make enquiries</ActionButton>
              </a>
            </Info>
          </InfoGroup>
        </InfoContainer>
      </ListingContainer>
    </BackgroundContainer>
  );
};

export default SingleListing;

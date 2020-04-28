import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import listing1 from "./images/listing1.jpg";
import listing2 from "./images/listing2.jpg";
import listing3 from "./images/listing3.jpg";

import "./css/all.css";

const LoadingContainer = styled.div`
  text-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoadingText = styled.p`
  font-size: 1.5em;
  text-align: middle;
  @media screen and (min-width: 768px) {
    font-size: 2em;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5em;
  }
`;
const LoadingSpinner = styled.div``;

const ListingsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: auto;
  margin-top: 1em;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 2em;
  }
`;
const ListingContainer = styled.section`
  width: 90%;
  padding: 5px;
  margin-bottom: 1em;
  box-shadow: 0 0 8px #7f8588;
  &:hover {
    box-shadow: 0 0 8px #2193b0;
  }
  @media screen and (min-width: 600px) {
    width: 45%;
    &:last-child {
    }
  }
  @media screen and (min-width: 980px) {
    width: 30%;
  }
  @media screen and (min-width: 1280px) {
    width: 20%;
  }
`;

const ListingPictureContainer = styled.section`
  width: 100%;
`;

const ListingImage = styled.img`
  width: 100%;
  height: auto;
`;

const ListingMetadataContainer = styled.section``;
const ListingInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;
const ListingInfo = styled.section`
  width: 27%;
  text-align: center;
`;

const Listing = ({ history }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const toListingPage = () => {
    history.push("/listings/1");
  };
  return (
    <>
      {loading ? (
        <LoadingContainer>
          <LoadingText>Finding the best matches for you</LoadingText>
          <LoadingSpinner className="fa-5x">
            <i className="fas fa-spinner fa-pulse" />
          </LoadingSpinner>
        </LoadingContainer>
      ) : (
        <ListingsContainer>
          <ListingContainer onClick={toListingPage}>
            <ListingPictureContainer>
              <ListingImage src={listing1} />
              <ListingMetadataContainer>
                Agunbelewo, Osogbo
              </ListingMetadataContainer>
              <ListingInfoContainer>
                <ListingInfo>
                  <p>
                    Bedrooms <i className="fas fa-bed" />
                  </p>
                  <p>5</p>
                </ListingInfo>
                <ListingInfo>
                  <p>
                    Bathrooms <i className="fas fa-shower" />
                  </p>
                  <p>2</p>
                </ListingInfo>
                <ListingInfo>
                  <p>
                    Monthly rent
                    <i className="fas fa-coins" />
                  </p>
                  <p>&#8358;300, 000</p>
                </ListingInfo>
              </ListingInfoContainer>
            </ListingPictureContainer>
          </ListingContainer>
          <ListingContainer onClick={toListingPage}>
            <ListingPictureContainer>
              <ListingImage src={listing2} />
              <ListingMetadataContainer>
                Agunbelewo, Osogbo
              </ListingMetadataContainer>
              <ListingInfoContainer>
                <ListingInfo>
                  <p>
                    Bedrooms <i className="fas fa-bed" />
                  </p>
                  <p>5</p>
                </ListingInfo>
                <ListingInfo>
                  <p>
                    Bathrooms <i className="fas fa-shower" />
                  </p>
                  <p>2</p>
                </ListingInfo>
                <ListingInfo>
                  <p>
                    Monthly rent
                    <i className="fas fa-coins" />
                  </p>
                  <p>&#8358;300, 000</p>
                </ListingInfo>
              </ListingInfoContainer>
            </ListingPictureContainer>
          </ListingContainer>
          <ListingContainer onClick={toListingPage}>
            <ListingPictureContainer>
              <ListingImage src={listing3} />
              <ListingMetadataContainer>
                Agunbelewo, Osogbo
              </ListingMetadataContainer>
              <ListingInfoContainer>
                <ListingInfo>
                  <p>
                    Bedrooms <i className="fas fa-bed" />
                  </p>
                  <p>5</p>
                </ListingInfo>
                <ListingInfo>
                  <p>
                    Bathrooms <i className="fas fa-shower" />
                  </p>
                  <p>2</p>
                </ListingInfo>
                <ListingInfo>
                  <p>
                    Monthly rent
                    <i className="fas fa-coins" />
                  </p>
                  <p>&#8358;300, 000</p>
                </ListingInfo>
              </ListingInfoContainer>
            </ListingPictureContainer>
          </ListingContainer>
        </ListingsContainer>
      )}
    </>
  );
};

export default withRouter(Listing);

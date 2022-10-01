import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import CallDetails from "components/cards/ThreeColCallDetails.js";
import SupportIconImage from "images/clock.svg";
import ShieldIconImage from "images/award.svg";
import Map from "images/map-pin.svg";
import PhoneIcon from "images/phone.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      {/* <ContactUsForm /> */}
      <CallDetails
        cards={[
          {
            title: "Lokasi",
            description: (
              <>
                <Address>
                  <AddressLine>
                    Jl. Karang hilir No. 815 ( depan gerbang SMK Kesehatan
                    harapan bunda) kec. Cibadak kab. Sukabumi
                  </AddressLine>
                </Address>
              </>
            ),
            imageSrc: Map,
          },
          {
            title: "Hubungi Kami",
            description: (
              <>
                <Address>
                  <AddressLine>No. Hp / WA: 0882 - 2585 - 1990</AddressLine>
                  <AddressLine>Instagram : @rumahsehatharapanbundarshb</AddressLine>
                </Address>
              </>
            ),
            imageSrc: PhoneIcon,
          },
          {
            title: "Jam Operasional",
            description: (
              <>
                <Address>
                  <AddressLine>
                    Senin - Minggu 08.00 - 18.00<br /> Last reservasi 17.00
                  </AddressLine>
                </Address>
              </>
            ),
            imageSrc: SupportIconImage,
          },
        ]}
      />
      <ContactDetails
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Illinois",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Dekalb, IL 60115</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "California",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Sacramento, CA 95820</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Tennessee",
            description: (
              <>
                <Address>
                  <AddressLine>74 Peachtree Ave.</AddressLine>
                  <AddressLine>Dyersburg, TN 38024</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "New Jersey",
            description: (
              <>
                <Address>
                  <AddressLine>8355 Summer Street</AddressLine>
                  <AddressLine>Manchester, NJ 08759</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
          {
            title: "Ohio",
            description: (
              <>
                <Address>
                  <AddressLine>7713 Snake Hill Ave.</AddressLine>
                  <AddressLine>Piqua, OH 45356</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
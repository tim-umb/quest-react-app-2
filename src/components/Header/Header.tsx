/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import VectorImage from 'src/assets/images/Header_Vector.png';
import Vector1Image from 'src/assets/images/Header_Vector_1.png';
import Vector2Image from 'src/assets/images/Header_Vector_2.png';
import Vector3Image from 'src/assets/images/Header_Vector_3.png';
import { styled } from '@mui/material/styles';
import { HeaderProps } from 'src/types';

const Header1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const TopNav: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(0, 60, 110, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `16px 100px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `68px`,
  margin: `0px`,
}));

const UmbLogo: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `140.08px`,
  height: `36px`,
  margin: `0px`,
});

const Vector: any = styled('img')({
  height: `28.05px`,
  width: `137.08px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Vector1: any = styled('img')({
  height: `5.25px`,
  width: `136.04px`,
  position: `absolute`,
  left: `0px`,
  top: `31px`,
});

const Vector2: any = styled('img')({
  height: `2.58px`,
  width: `1.96px`,
  position: `absolute`,
  left: `137px`,
  top: `26px`,
});

const Vector3: any = styled('img')({
  height: `4.47px`,
  width: `4.48px`,
  position: `absolute`,
  left: `136px`,
  top: `25px`,
});

const Breadcrumbs: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(16, 84, 138, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `56px`,
  margin: `0px`,
}));

const AppNav: any = styled('div')({
  backgroundColor: `rgba(224, 224, 224, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `50px`,
  margin: `0px`,
});

const Spacer: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `40px`,
  margin: `0px`,
});

function Header(props: HeaderProps): JSX.Element {
  return (
    <Header1 className={props.className}>
      <TopNav>
        <UmbLogo>
          <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
          <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
          <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
          <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
        </UmbLogo>
      </TopNav>
      <Breadcrumbs></Breadcrumbs>
      <AppNav></AppNav>
      <Spacer></Spacer>
    </Header1>
  );
}

export default Header;
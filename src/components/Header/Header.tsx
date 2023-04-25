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
import UmbLogoImage from 'src/assets/images/Header_UMB_logo.png';
import { styled } from '@mui/material/styles';
import { HeaderProps } from 'src/types';
import useHeader from 'src/components/Header/useHeader';

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
  color: theme.palette['primary']['dark'],
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

const UmbLogo: any = styled('img')({
  height: `36px`,
  width: `140.08px`,
  margin: `0px`,
});

const Breadcrumbs: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `56px`,
  margin: `0px`,
  backgroundColor: data.primaryMain,
}));

const AppNav: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  color: theme.palette['colors']['grey']['300'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `50px`,
  margin: `0px`,
  backgroundColor: data.colorsGrey300,
}));

function Header(props: HeaderProps): JSX.Element {
  const { data } = useHeader();

  return (
    <Header1 className={props.className}>
      <TopNav>
        <UmbLogo src={UmbLogoImage} loading="lazy" alt={'UMB-logo'} />
      </TopNav>
      <Breadcrumbs data={data}></Breadcrumbs>
      <AppNav data={data}></AppNav>
    </Header1>
  );
}

export default Header;

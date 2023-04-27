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
import { styled } from '@mui/material/styles';
import Header from 'src/components/Header/Header';
import FormEntity from 'src/components/FormEntity/FormEntity';
import { PageParentProps } from 'src/types';

const PageParent1: any = styled('div')(({ theme }: any) => ({
  color: theme.palette['primary']['contrast'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `782px`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const PageContainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Header1: any = styled('div')({
  backgroundColor: `rgba(224, 224, 224, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Header2: any = styled(Header)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const AppBody: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const LeftColumn: any = styled('div')(({ theme }: any) => ({
  color: theme.palette['primary']['contrast'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  width: `421px`,
  margin: `0px 0px 0px 8px`,
}));

const RightColumn: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `48px 100px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const FormEntity1: any = styled(FormEntity)(({ theme }: any) => ({
  width: `700px`,
  margin: `0px`,
}));

function PageParent(props: PageParentProps): JSX.Element {
  return (
    <PageParent1 className={props.className}>
      <PageContainer>
        <Header1>
          <Header2 />
        </Header1>
        <AppBody>
          {false && <LeftColumn></LeftColumn>}
          <RightColumn>
            <FormEntity1 />
          </RightColumn>
        </AppBody>
      </PageContainer>
    </PageParent1>
  );
}

export default PageParent;

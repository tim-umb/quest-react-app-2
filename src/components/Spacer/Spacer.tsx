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
import { SpacerProps } from 'src/types';

const Spacer1: any = styled('div')(({ theme }: any) => ({
  color: theme.palette['primary']['contrast'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `40px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
}));

function Spacer(props: SpacerProps): JSX.Element {
  return <Spacer1 className={props.className}></Spacer1>;
}

export default Spacer;

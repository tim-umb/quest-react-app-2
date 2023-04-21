/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';

const useHeader = () => {
  let data: any = {
    primaryMain: questTheme.palette.primary.main,
    primaryDark: questTheme.palette.primary.dark,
    backgroundDefault: questTheme.palette.background.default,
    colorsGrey300: questTheme.palette.grey[300],
  };

  let fns: any = {};
  return { data, fns };
};

export default useHeader;
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
import {
  FormControl,
  Select,
  InputLabel,
  TextField,
  Button,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import { Form1Props } from 'src/types';

const TypeQuest: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const ContactUs: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `34px`,
  letterSpacing: `0.25px`,
  textDecoration: `none`,
  lineHeight: `123.50000143051147%`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Row1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  height: `129px`,
  margin: `0px`,
});

const SelectStandard: any = styled(FormControl)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const TextFieldStandard: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Row2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 40px`,
});

const TextFieldStandard1: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `0px`,
});

const TextFieldStandard2: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const TextFieldOutlined: any = styled(TextField)({
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const Btm: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `40px 0px 0px 0px`,
});

const ButtonContained: any = styled(Button)({
  alignSelf: `stretch`,
  margin: `0px`,
});

function Form1(props: Form1Props): JSX.Element {
  return (
    <TypeQuest className={props.className}>
      <Helmet>
        <title>Form-1</title>
      </Helmet>
      <ContactUs>{`Contact Us`}</ContactUs>
      <Frame3>
        <Row1>
          <SelectStandard variant="standard">
            <InputLabel></InputLabel>
            <Select></Select>
          </SelectStandard>
          <TextFieldStandard variant="standard" size="small" label={`Phone`} />
        </Row1>
        <Row2>
          <TextFieldStandard1
            variant="standard"
            size="small"
            label={`Company`}
          />
          <TextFieldStandard2 variant="standard" size="small" label={`Email`} />
        </Row2>
      </Frame3>
      <TextFieldOutlined
        variant="outlined"
        size="small"
        label={`Comments`}
        helperText="Helper text"
      />
      <Btm>
        <ButtonContained variant="contained" size="large" color="primary">
          {' '}
          Submit{' '}
        </ButtonContained>
      </Btm>
    </TypeQuest>
  );
}

export default Form1;
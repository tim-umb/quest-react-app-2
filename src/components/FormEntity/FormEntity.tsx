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
  Typography,
  FormControl,
  Select,
  InputLabel,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { FormEntityProps } from 'src/types';
import useFormEntity from 'src/components/FormEntity/useFormEntity';

const FormEntity1: any = styled('div')({
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

const Typography1: any = styled(Typography)(({ theme }: any) => ({
  zIndex: `6`,
  margin: `0px`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['typography']['h6'].fontStyle,
  fontFamily: theme.typography['typography']['h6'].fontFamily,
  fontWeight: theme.typography['typography']['h6'].fontWeight,
  fontSize: theme.typography['typography']['h6'].fontSize,
  letterSpacing: theme.typography['typography']['h6'].letterSpacing,
  lineHeight: theme.typography['typography']['h6'].lineHeight,
  textDecoration: theme.typography['typography']['h6'].textDecoration,
  textTransform: theme.typography['typography']['h6'].textTransform,
}));

const Select1: any = styled(FormControl)(({ theme }: any) => ({
  alignSelf: `stretch`,
  zIndex: `5`,
  margin: `16px 0px 0px 0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const TextField1: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  zIndex: `4`,
  margin: `16px 0px 0px 0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const Frame256: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `3`,
  margin: `16px 0px 0px 0px`,
});

const Frame259: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Select2: any = styled(FormControl)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const Frame260: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 16px`,
});

const TextField2: any = styled(TextField)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const Frame257: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `2`,
  margin: `16px 0px 0px 0px`,
});

const Select3: any = styled(FormControl)(({ theme }: any) => ({
  flex: `1`,
  zIndex: `1`,
  margin: `0px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const Select4: any = styled(FormControl)(({ theme }: any) => ({
  flex: `1`,
  zIndex: `0`,
  margin: `0px 0px 0px 16px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const Frame258: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  zIndex: `1`,
  margin: `16px 0px 0px 0px`,
});

const FormControlLabel1: any = styled(FormControlLabel)(({ theme }: any) => ({
  flex: `1`,
  zIndex: `1`,
  margin: `0px`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['typography']['body1'].fontStyle,
  fontFamily: theme.typography['typography']['body1'].fontFamily,
  fontWeight: theme.typography['typography']['body1'].fontWeight,
  fontSize: theme.typography['typography']['body1'].fontSize,
  letterSpacing: theme.typography['typography']['body1'].letterSpacing,
  lineHeight: theme.typography['typography']['body1'].lineHeight,
  textDecoration: theme.typography['typography']['body1'].textDecoration,
  textTransform: theme.typography['typography']['body1'].textTransform,
}));

const TextField3: any = styled(TextField)(({ theme }: any) => ({
  flex: `1`,
  zIndex: `0`,
  margin: `0px 0px 0px 16px`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['components']['input-label'].fontStyle,
  fontFamily: theme.typography['components']['input-label'].fontFamily,
  fontWeight: theme.typography['components']['input-label'].fontWeight,
  fontSize: theme.typography['components']['input-label'].fontSize,
  letterSpacing: theme.typography['components']['input-label'].letterSpacing,
  lineHeight: theme.typography['components']['input-label'].lineHeight,
  textDecoration: theme.typography['components']['input-label'].textDecoration,
  textTransform: theme.typography['components']['input-label'].textTransform,
}));

const Button1: any = styled(Button)(({ theme }: any) => ({
  alignSelf: `stretch`,
  zIndex: `0`,
  margin: `16px 0px 0px 0px`,
  color: theme.palette['primary']['contrast'],
  fontStyle: theme.typography['components']['button-large'].fontStyle,
  fontFamily: theme.typography['components']['button-large'].fontFamily,
  fontWeight: theme.typography['components']['button-large'].fontWeight,
  fontSize: theme.typography['components']['button-large'].fontSize,
  letterSpacing: theme.typography['components']['button-large'].letterSpacing,
  lineHeight: theme.typography['components']['button-large'].lineHeight,
  textDecoration: theme.typography['components']['button-large'].textDecoration,
  textTransform: theme.typography['components']['button-large'].textTransform,
}));

function FormEntity(props: FormEntityProps): JSX.Element {
  const { data, fns } = useFormEntity();

  return (
    <FormEntity1 className={props.className}>
      <Typography1 variant={'body1'} gutterBottom={false}>
        {fns.getEntity()}
      </Typography1>
      <Select1 variant={'outlined'} size={'small'} disabled={false}>
        <InputLabel>{'Entity type'}</InputLabel>
        <Select label={'Entity type'}>
          {data.entityTypes.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </Select1>
      <TextField1
        variant={'outlined'}
        disabled={false}
        size={'small'}
        label={'Account name'}
        InputProps={{}}
      />
      <Frame256>
        <Frame259>
          <Select2 variant={'outlined'} size={'small'} disabled={false}>
            <InputLabel>{'Tax ID type'}</InputLabel>
            <Select label={'Tax ID type'}>
              {data.taxIdType.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.text}
                </MenuItem>
              ))}
            </Select>
          </Select2>
        </Frame259>
        <Frame260>
          <TextField2
            variant={'outlined'}
            disabled={false}
            size={'small'}
            label={'Tax ID number'}
            InputProps={{}}
          />
        </Frame260>
      </Frame256>
      <Frame257>
        <Select3 variant={'outlined'} size={'small'} disabled={false}>
          <InputLabel>{'Foreign investor'}</InputLabel>
          <Select label={'Foreign investor'}>
            {data.foreignInvestorType.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Select3>
        <Select4 variant={'outlined'} size={'small'} disabled={false}>
          <InputLabel>{'Accreditation'}</InputLabel>
          <Select label={'Accreditation'}>
            {data.accreditationTypes.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Select4>
      </Frame257>
      <Frame258>
        <FormControlLabel1
          control={
            <Checkbox
              indeterminate={false}
              disabled={false}
              size={'medium'}
              color={'primary'}
              defaultChecked={false}
            ></Checkbox>
          }
          label={'Control person exempt'}
        />
        <TextField3
          variant={'outlined'}
          disabled={false}
          size={'small'}
          label={'Exempt reason'}
          InputProps={{}}
        />
      </Frame258>
      <Button1
        size={'large'}
        color={'primary'}
        disabled={false}
        variant={'contained'}
      >
        {fns.getButtonLabel()}
      </Button1>
    </FormEntity1>
  );
}

export default FormEntity;

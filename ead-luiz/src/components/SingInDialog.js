import * as React from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    TextField,
    Button,
    Grid
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SingInDialogBox = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
      padding: theme.spacing(3),
      borderRadius: '50px'
    },
    '& .MuiFormControl-root': {
      borderRadius: '12px'
    }
  }));

const SingInTitle = styled(DialogTitle)(({ theme }) => ({
    fontFamily: 'Rajdhani',
    fontWeight: '700',
    fontSize: '42px',
    lineHeight: '84%',
    textAlign: 'center',
    color: '#001B49',
}));

const SingInButton = styled(Button)(({ theme }) => ({
    width: '100%',
    fontFamily: 'Rajdhani',
    fontWeight: '700',
    fontSize: '18px',
    padding: '16.5px 80px;',
    lineHeight: '23px',
    borderRadius: '14px',
    color: theme.palette.getContrastText('#001B49'),
    backgroundColor: '#001B49',
    '&:hover': {
      backgroundColor: '#001436',
    },
}));

const TextFieldStyled = styled(TextField)({
  '& label': {
    color: '#537ABD',
    fontWeight: 600,
    padding: '0 25px !important'
  },
  '& label.Mui-focused': {
    color: '#273A5A',
    fontWeight: 700
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#273A5A',
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      fontFamily: 'Rajdhani',
      fontWeight: 700,
      color: '#273A5A',
      padding: '16px 36px !important',
      borderRadius: '8px',
    },
    '& fieldset': {
      borderColor: 'transparent',
      padding: '16px 28px !important'
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#273A5A',
    },
  },
});

const SingInDialog = (props) => {
    const { setOpen, open } = props;
    const [valueFormatted, setValueFormatted] = React.useState('');

    const handlePhone = (event) => {
      let phone = event.target.value;
      setValueFormatted(phoneMask(phone));
    }
    
    const phoneMask = (value) => {
      if (!value) return ""
      value = value.replace(/\D/g,'')
      value = value.replace(/(\d{2})(\d)/,"($1) $2")
      value = value.replace(/(\d)(\d{4})$/,"$1-$2")
      return value
    }

    return(
      <SingInDialogBox onClose={() => setOpen(false)} open={open}>
        <SingInTitle textAlign='center'>GARANTA SUA VAGA</SingInTitle>
        <DialogContent>
          <Grid container paddingTop={2} spacing={2}>
            <Grid item sm={24} xs={24}>
              <TextFieldStyled required fullWidth label='Nome Completo' sx={{ color: '#273A5A', backgroundColor: '#F3F3F3' }} InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item sm={24} xs={24}>
              <TextFieldStyled required fullWidth label='Email' sx={{ color: '#273A5A', backgroundColor: '#F3F3F3' }} InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item md={6} sm={6} xs={24}>
              <TextFieldStyled
                required
                fullWidth 
                label='Whatsapp'
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 15 }}
                type='text' inputMode='decimal'
                sx={{ color: '#273A5A', backgroundColor: '#F3F3F3' }}
                value={valueFormatted}
                onChange={handlePhone}
              />
            </Grid>
            <Grid item md={6} sm={6} xs={24}>
              <SingInButton variant="contained">Enviar</SingInButton>
            </Grid>
          </Grid>
        </DialogContent>
      </SingInDialogBox>
    );
};

export default SingInDialog;
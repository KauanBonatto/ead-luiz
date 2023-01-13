import * as React from 'react';
import './SingInDialog.css';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    TextField,
    Grid,
    Alert,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import emailjs from 'emailjs-com';

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
    const [formSent, setFormSent] = React.useState(false);
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [whatsapp, setWhatsapp] = React.useState('');
    const [status, setStatus] = React.useState('');

    const handleModalClose = () => {
      setOpen(false);
      setFormSent(false);
      setFullName('');
      setEmail('')
      setWhatsapp('');
    };

    const handlePhone = (event) => {
      let phone = event.target.value;
      setWhatsapp(phoneMask(phone));
    }
    
    const phoneMask = (value) => {
      if (!value) return ""
      value = value.replace(/\D/g,'')
      value = value.replace(/(\d{2})(\d)/,"($1) $2")
      value = value.replace(/(\d)(\d{4})$/,"$1-$2")
      return value
    }

    const handleSendForm = (e) => {
      e.preventDefault();
      console.log(e, 'teste');
    
      emailjs.sendForm(
        'service_t9g9szs',
        'template_ttcvybd',
        // process.env.REACT_APP_SERVICE_ID, 
        // process.env.REACT_APP_TEMPLATE_ID, 
        e.target,
        'xxh9-DIqGE2tDzYcW'
        // process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if(result.status === 200){
          setStatus('success');
          setFormSent(true);
          setFullName('');
          setEmail('')
          setWhatsapp('');
        }
        }, (error) => {
          setStatus('error');
        });
    };

    return(
      
        <SingInDialogBox onClose={handleModalClose} open={open}>
          <SingInTitle textAlign='center'>GARANTA SUA VAGA</SingInTitle>
          <DialogContent>
            <form onSubmit={handleSendForm}>
            <Grid container paddingTop={2} spacing={2}>
              <Grid item sm={24} xs={24}>
                <TextFieldStyled 
                  required 
                  fullWidth 
                  label='Nome Completo' 
                  name='full_name' 
                  sx={{ color: '#273A5A', backgroundColor: '#F3F3F3' }} 
                  InputLabelProps={{ shrink: true }}
                  value={fullName}
                  onChange={e => setFullName(e.target.value)} 
                />
              </Grid>
              <Grid item sm={24} xs={24}>
                <TextFieldStyled 
                  required 
                  fullWidth 
                  label='Email' 
                  name='email' 
                  sx={{ color: '#273A5A', backgroundColor: '#F3F3F3' }} 
                  InputLabelProps={{ shrink: true }} 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={24}>
                <TextFieldStyled
                  required
                  fullWidth 
                  label='Whatsapp'
                  name='whatsapp'
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ maxLength: 15 }}
                  type='text' inputMode='decimal'
                  sx={{ color: '#273A5A', backgroundColor: '#F3F3F3' }}
                  value={whatsapp}
                  onChange={handlePhone}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={24}>
                <button className='modal-button' type='submit'>Enviar</button>
              </Grid>
              
            </Grid>
            </form>
          </DialogContent>
            <Alert 
              severity={status}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setFormSent(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              style={{display: formSent ? 'flex' : 'none', padding: '0 20px'}} 
              onClose={() => {setFormSent(formSent)}}>
              {status == 'success' ? 'Seus dados foram enviados com sucesso!' : 'Algo de errado ocorreu com sua tentativa de cadastro!'}
            </Alert>
        </SingInDialogBox>
      
    );
};

export default SingInDialog;
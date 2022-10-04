import { Container, Grid,
  Radio,
  FormControlLabel,
  Card,
  CardContent,
  Divider,
 } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

const CardLogo = styled('img')(
  ({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
`
);

const CardCc = styled(Card)(
  ({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`
);


const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);


function Hero() {
  const [selectedValue, setSelectedValue] = useState('Application Web');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // const result = googleFormsToJson(
  //   'https://docs.google.com/forms/d/e/1FAIpQLSdJDcBsutfZEFAzE_ZUDhanHistpOHkcaQpnw9j5pZ9wGfTQQ/viewform'
  // )

  // console.log(result.fields)

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
    
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Sastec Diagnostics
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
          Avant de commencer votre audit technique, merci de choisir le type et de remplir l'intitulé de  votre projet 
          </TypographyH2>
        </Grid>
      </Grid>
      <Card>
      <Divider />
      <Box p={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center" 
                >
                <CardLogo
                  sx={{
                    width: 60,
                    height: 60,
         
                  }}
                  src="/static/images/placeholders/logo/web.png"
                  alt="web"
                />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                    Application Web
                  </Typography>
                </Box>
              </Box>
              <Box
                pt={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  value="Application Web"
                  control={
                    <Radio
                      checked={selectedValue === 'Application Web'}
                      onChange={handleChange}
                      value="Application Web"
                      color="primary"
                      name="primary-card"
                    />
                  }
                  label="Sélectionner"
                />
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <CardLogo
                  sx={{
                    width: 60,
                    height: 60,         
                  }}
                  src="/static/images/placeholders/logo/mobile.png"
                  alt="mobile"
                />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                  Application Mobile               
                   </Typography>
                </Box>
              </Box>
              <Box
                pt={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  value="b"
                  control={
                    <Radio
                      checked={selectedValue === 'Application Mobile'}
                      onChange={handleChange}
                      value="Application Mobile"
                      color="primary"
                      name="primary-card"
                    />
                  }
                  label="Sélectionner"
                />
              
              </Box>
            </CardCc>
          </Grid>
          <Grid item xs={6} sm={3} display="flex" alignItems="center" color= "#111633">     '   
         </Grid>
          <Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <Box display="flex" alignItems="center">
                <CardLogo
                  sx={{
                    width: 60,
                    height: 60,         
                  }}
                  src="/static/images/placeholders/logo/mweb.png"
                  alt="mweb"
                />
                <Box>
                  <Typography variant="h3" fontWeight="normal">
                  Application Web & Mobile               
                   </Typography>
                </Box>
              </Box>
              <Box
                pt={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <FormControlLabel
                  value="b"
                  control={
                    <Radio
                      checked={selectedValue === 'Application Web & Mobile'}
                      onChange={handleChange}
                      value="Application Web & Mobile"
                      color="primary"
                      name="primary-card"
                    />
                  }
                  label="Sélectionner"
                />              
              </Box>
            </CardCc>
          </Grid>          
        </Grid>
        <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                  <PageTitleWrapper>
                <PageTitle
                 heading={selectedValue}
                 subHeading="Intitulé du projet"
                 />
              </PageTitleWrapper>
                  </div>
                </Box>
              </CardContent>
      </Box>
    </Card>
   <Box display="flex" alignItems="center" color= "#111633">     '   
    </Box>
      <Button
            component={RouterLink}
            to="management/profile/settings"
            // href="https://docs.google.com/forms/d/e/1FAIpQLSdJDcBsutfZEFAzE_ZUDhanHistpOHkcaQpnw9j5pZ9wGfTQQ/viewform"
            size="large"
            variant="contained"
          >
            Commencer l'audit technique
          </Button>
    </Container>
  );
}

export default Hero;

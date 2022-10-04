import { Typography } from '@mui/material';

function PageHeader() {
  // const user = {
  //   name: 'Catherine Pike',
  //   avatar: '/static/images/avatars/1.jpg'
  // };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
Informations générales      </Typography>
      <Typography variant="subtitle2">
      Cette partie nous donne une vision sur les informations générales de l'application.
      </Typography>
    </>
  );
}

export default PageHeader;

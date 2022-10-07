import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  // Button
} from '@mui/material';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
// import Text from 'src/components/Text';
// import Label from 'src/components/Label';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

function EditProfileTab() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
            <div> <tr><td><Typography variant="h4" gutterBottom>
              Quel est l’usage principal de votre application (à quoi sert-elle) ?  &nbsp;   </Typography>   </td><td>  
                 <Typography variant="h4"  color="red">
             *   </Typography></td>      </tr> </div>
              {/* <Typography variant="subtitle2">
                Cette partie nous donne une vision sur les informations générales de l'application  
              </Typography> */}
            </Box>
            {/* <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue=""
                    />        
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
              Comment avez-vous connu notre service de diagnostic ? *          </Typography>
              <Typography variant="subtitle2">
              (Un choix est possible)
              </Typography>
            </Box>
            {/* <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
              <FormControl
                required
         //       error={error}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
      <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Bouche-à-Oreilles" control={<Radio />} label="Bouche-à-Oreilles" />
        <FormControlLabel value="Recommandation" control={<Radio />} label="Recommandation d'un confrère" />
        <FormControlLabel value="Google" control={<Radio />} label="Recherche Google" />
        <FormControlLabel value="ReseauxSociaux" control={<Radio />} label="Réseaux Sociaux" />
        <FormControlLabel value="Autre" control={<Radio />} label="Autre" />
      </RadioGroup>
    </FormControl>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileTab;

import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  // Switch,
  CardContent,
  // Button
} from '@mui/material';
import TextField from '@mui/material/TextField';
// import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
// import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
// import Text from 'src/components/Text';
// import Label from 'src/components/Label';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function NotificationsTab() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false
  });

   const { salaries, clients, fournisseurs, partenaires, autree } = state;
   const errorTwo = [ salaries, clients, fournisseurs, partenaires, autree ].filter((v) => v).length === 0;
   

   const { utilis, trente, cent, cinqcent, jenesaispas3 } = state;
   const errorThree = [ utilis, trente, cent, cinqcent, jenesaispas3 ].filter((v) => v).length === 0;

   const { application, evolutions, technologies, tests , problemes, competences, autre } = state;
   const error = [application, evolutions, technologies, tests, problemes, competences, autre].filter((v) => v).length === 0;

   const { services, support, Marketing, Production , jenesaispas1 } = state;
   const errorFour = [services, support, Marketing, Production, jenesaispas1 ].filter((v) => v).length === 0;



  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box pb={2}>
         <Typography variant="h3">Informations sur l'organisation</Typography>
          <Typography variant="subtitle2">
          Cette rubrique sert à donner des informations sur l'organisation       </Typography> 
        </Box>
        <Card>
          <List>
          <ListItem sx={{ p: 8 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary="Quel est le nom de votre organisation ? *"
              //  secondary="Receive account status weekly report in your inbox"
              />              
              <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue=""
                    />
            </ListItem>
            <Divider component="li" />
          <ListItem sx={{ p: 8 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2', 
                  lineHeight: 1
                }}
                primary="Quel est l’usage principal de votre application ? *"
              //  secondary="Receive account status weekly report in your inbox"
              />
              <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue=""
                    />
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 10 }}>
              <ListItemText
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  lineHeight: 1
                }}
                primary="Quelle est votre fonction ? *"
              //  secondary="Receive account status weekly report in your inbox"
              />
              <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue=""
                    />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Box
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          ></Box>
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
              Quel est votre plus grand problème avec votre application ? *            </Typography>
              <Typography variant="subtitle2">
              (plusieurs choix possibles)
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
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Choisir une ou plusieurs réponses</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={application} onChange={handleChange} name="application" />
            }
            label="L’application est décriée au sein de l’organisation"
          />
          <FormControlLabel
            control={
              <Checkbox checked={evolutions} onChange={handleChange} name="evolutions" />
            }
            label="Des évolutions urgentes sont trop coûteuses"
          />
          <FormControlLabel
            control={
              <Checkbox checked={technologies} onChange={handleChange} name="technologies" />
            }
            label="Les technologies sont problématiques"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={tests} onChange={handleChange} name="tests" />
            }
            label="Il n’y a pas de tests fonctionnels automatisés"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={problemes} onChange={handleChange} name="problemes" />
            }
            label="Il y a des problèmes importants de conception"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={competences} onChange={handleChange} name="competences" />
            }
            label="Les compétences techniques ne sont plus disponibles"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={autre} onChange={handleChange} name="autre" />
            }
            label="Autre"
          />
       </FormGroup>
      { autre ?               <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue=""
                    /> : <FormHelperText></FormHelperText>   }
                 </FormControl> 
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
                error={error}
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
{/* 
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
                Email Addresses
              </Typography>
              <Typography variant="subtitle2">
                Manage details related to your associated email addresses
              </Typography>
            </Box>
            <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button>
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>example@demo.com</b>
                  </Text>
                  <Box pl={1} component="span">
                    <Label color="success">Primary</Label>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={3} pb={2}>
                    Email ID:
                  </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <Text color="black">
                    <b>demo@example.com</b>
                  </Text>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid> */}
    </Grid >
      <Grid item xs={12} container spacing={3} >
        <Box pb={2}>
        <Typography variant="h3" color="#070C27" >. </Typography>
          <Typography variant="h3">Information sur l'application</Typography>
          <Typography variant="subtitle2">
          Cette  rubrique sert à donner des informations sur l'application
          </Typography>
        </Box>
        <Grid item xs={12} >
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
                error={error}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
      <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="an" control={<Radio />} label="Moins de 1 an" />
        <FormControlLabel value="cinq" control={<Radio />} label="Entre 1 et 5 ans" />
        <FormControlLabel value="quinze" control={<Radio />} label="Entre 5 et 15 ans" />
        <FormControlLabel value="plus" control={<Radio />} label="Plus de 15 ans" />
        <FormControlLabel value="saispas" control={<Radio />} label="Je ne sais pas" />
      </RadioGroup>
    </FormControl>
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
              Combien de temps a duré le développement de la première version de l’application ? *    </Typography>
              <Typography variant="subtitle2">
              (Un choix est possible)
              </Typography>
            </Box>
            {/*  <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
              <FormControl
                required
                error={error}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="female"
             name="radio-buttons-group"
             >
        <FormControlLabel value="cent" control={<Radio />} label="Moins de 100 jours/homme" />
        <FormControlLabel value="deuxcent" control={<Radio />} label="Entre 100 et 250 jours/homme" />
        <FormControlLabel value="troiscent" control={<Radio />} label="Entre 250 et 500 jours/homme" />
        <FormControlLabel value="plus" control={<Radio />} label="Plus de 500 jours/homme" />
        <FormControlLabel value="jenesaispas" control={<Radio />} label="Je ne sais pas" />
           </RadioGroup>
           </FormControl>
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
              Quelle est la richesse fonctionnelle de l’application ? *    </Typography>
              <Typography variant="subtitle2">
              (Un choix est possible)
              </Typography>
            </Box>
            {/*  <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
              <FormControl
                required
                error={errorFour}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="female"
             name="radio-buttons-group"
             >
        <FormControlLabel value="metier" control={<Radio />} label="Application très simple avec un seul objectif métier" />
        <FormControlLabel value="organisation" control={<Radio />} label="Application qui offre des fonctionnalités peu nombreuses, principalement à un seul service de l'organisation" />
        <FormControlLabel value="services" control={<Radio />} label="Application riche et utilisée par différents services de l'organisation" />
        <FormControlLabel value="grandNombre" control={<Radio />} label="Application qui offre un grand nombre de fonctionnalités à l'ensemble des services de l'organisation" />
        <FormControlLabel value="jenesaispas1" control={<Radio />} label="Je ne sais pas" />
           </RadioGroup>
           </FormControl>
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
              De quand date la dernière version majeure de l’application ? *    </Typography>
              <Typography variant="subtitle2">
              Une version majeure apporte une nouvelle fonctionnalité ou modifie une fonctionnalité existante en profondeur. Pour une plateforme web, ce sera par exemple la mise en place d'un système de paiement en ligne. A l'inverse, les corrections d'anomalies et les améliorations mineures ne constituent pas une version majeure.
              </Typography>
            </Box>
            {/*  <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
              <FormControl
                required
                error={error}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="female"
             name="radio-buttons-group"
             >
        <FormControlLabel value="trois" control={<Radio />} label="Moins de 3 mois" />
        <FormControlLabel value="six" control={<Radio />} label="Entre 3 mois et 6 mois" />
        <FormControlLabel value="an" control={<Radio />} label="Entre 6 mois et 1 an" />
        <FormControlLabel value="troisans" control={<Radio />} label="Entre un 1 et 3 ans" />
        <FormControlLabel value="plustrois" control={<Radio />} label="Plus de 3 ans" />
        <FormControlLabel value="jenesaispas2" control={<Radio />} label="Je ne sais pas" />
           </RadioGroup>
           </FormControl>
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
              Quels sont les utilisateurs de l’application ? *            </Typography>
              <Typography variant="subtitle2">
              (plusieurs choix possibles)
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
        error={errorTwo}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Choisir une ou plusieurs réponses</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={salaries} onChange={handleChange} name="salaries" />
            }
            label="Les salariés de votre organisation"
          />
          <FormControlLabel
            control={
              <Checkbox checked={clients} onChange={handleChange} name="clients" />
            }
            label="Les clients ou usagers"
          />
          <FormControlLabel
            control={
              <Checkbox checked={fournisseurs} onChange={handleChange} name="fournisseurs" />
            }
            label="Les fournisseurs"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={partenaires} onChange={handleChange} name="partenaires" />
            }
            label="Des partenaires"
          />
                    <FormControlLabel
            control={
              <Checkbox checked={autree} onChange={handleChange} name="autree" />
            }
            label="Autre"
          />
       </FormGroup>
      { autree ? <TextField
                      fullWidth
                      required
                      id="outlined-required"
                      label="Required"
                      defaultValue=""
                    /> : <FormHelperText></FormHelperText>   }
                 </FormControl> 
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
              À quels services de l’entreprise est réservée l’application ? *    </Typography>
              <Typography variant="subtitle2">
             ( Choisir une réponse )
              </Typography>
            </Box>
            {/*  <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
              <FormControl
                required
                error={errorFour}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="female"
             name="radio-buttons-group"
             >
        <FormControlLabel selceted value="services" control={<Radio />} label="Tous les services" />
        <FormControlLabel value="support" control={<Radio />} label="Services support (ressources humaines, comptabilité, finances)" />
        <FormControlLabel value="Marketing" control={<Radio />} label="Marketing et/ou Commercial" />
        <FormControlLabel value="Production" control={<Radio />} label="Production" />
        <FormControlLabel value="jenesaispas3" control={<Radio />} label="Je ne sais pas" />
           </RadioGroup>
           </FormControl>
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
              Quel est le nombre total d’utilisateurs de l’application ? *    </Typography>
              <Typography variant="subtitle2">
             ( Choisir une réponse )
              </Typography>
            </Box>
            {/*  <Button variant="text" startIcon={<EditTwoToneIcon />}>
              Edit
            </Button> */}
          </Box>
          <Divider />
          <CardContent sx={{ p: 4 }}>
            <Typography variant="subtitle2">
              <Grid container spacing={0}>
              <FormControl
                required
                error={errorThree}
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard">
            <FormLabel id="demo-radio-buttons-group-label">Choisir une réponse</FormLabel>
            <RadioGroup
             aria-labelledby="demo-radio-buttons-group-label"
             defaultValue="female"
             name="radio-buttons-group"
             >
        <FormControlLabel value="utilis" control={<Radio />} label="Moins de 30 utilisateurs" />
        <FormControlLabel value="trente" control={<Radio />} label="Entre 30 de 99 utilisateurs" />
        <FormControlLabel value="cent" control={<Radio />} label="Entre 100 de 499 utilisateurs" />
        <FormControlLabel value="cinqcent" control={<Radio />} label="Plus de 500 utilisateurs" />
        <FormControlLabel value="jenesaispas3" control={<Radio />} label="Je ne sais pas" />
           </RadioGroup>
           </FormControl>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      </Grid>
    </Grid>
  );
}

export default NotificationsTab;

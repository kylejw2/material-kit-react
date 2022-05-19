import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Grid,
  MenuItem,
  Typography,
  InputLabel,
  Select,
  Chip,
} from '@mui/material';

export const CustomerListToolbar = (props) => {
  const handleChange = () => {};

  const chains = [
    { value: 'ethereum', label: 'Ethereum' },
    { value: 'fantom', label: 'Fantom' },
    { value: 'avalanche', label: 'Avalanche' },
    { value: 'solana', label: 'Solana' },
    { value: 'cardano', label: 'Cardano' },
    { value: 'polygon', label: 'Polygon' },
  ];

  const categories = ['Metaverse', 'Collectible', 'Gaming', 'Utility', 'DAO'];

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Customers
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  label="Project Name"
                  name="projectName"
                  onChange={handleChange}
                  required
                  value={'project name'}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Twitter Followers (Minimum)"
                  name="twitterFollowersMin"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Twitter Followers (Maximum)"
                  name="twitterFollowersMax"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Discord Members (Minimum)"
                  name="discordMembersMin"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Discord Members (Maximum)"
                  name="discordMembersMax"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  onChange={handleChange}
                  required
                  value={'description'}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Collection Count (Minimum)"
                  name="collectionCountMin"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Collection Count (Maximum)"
                  name="collectionCountMax"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Mint Date"
                  name="collectionCountMin"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Collection Count (Maximum)"
                  name="collectionCountMax"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                Mint Date
              </Grid>
              <Grid item md={2} xs={12}>
                Mint End Date
              </Grid>
              <Grid item md={2} xs={12}>
                Presale Date
              </Grid>
              <Grid item md={2} xs={12}>
                Presale End Date
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Mint Cost (Minimum)"
                  name="mintCostMin"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  label="Mint Cost (Maximum)"
                  name="mintCostMax"
                  onChange={handleChange}
                  type="number"
                  minimum={0}
                  required
                  value={100}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <InputLabel id="multiple-chains">Chain</InputLabel>
                <Select
                  fullWidth
                  labelId="multiple-chains"
                  name="chain"
                  onChange={handleChange}
                  multiple
                  value={['Ethereum', 'Avalanche']}
                  variant="outlined"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected?.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {chains.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md={6} xs={12}>
                <InputLabel id="multiple-categories">Category</InputLabel>
                <Select
                  fullWidth
                  labelId="multiple-categories"
                  name="chain"
                  onChange={handleChange}
                  multiple
                  value={['Metaverse', 'Gaming']}
                  variant="outlined"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected?.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

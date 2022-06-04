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

const NftListFilters = ({
  projectName,
  twitterFollowersMin,
  twitterFollowersMax,
  discordMembersMin,
  discordMembersMax,
  description,
  collectionCountMin,
  collectionCountMax,
  mintCostMin,
  mintCostMax,
  mintStartDate,
  mintEndDate,
  presaleStartDate,
  presaleEndDate,
  chains,
  categories,
  dispatch,
  onSave
}) => {
  const chainOptions = ['Ethereum', 'Fantom', 'Avalanche', 'Solana', 'Cardano', 'Polygon'];

  const categoryOptions = ['Metaverse', 'Collectible', 'Gaming', 'Utility', 'DAO'];

  return (
    <Box>
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
          NFT Projects
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Project Name"
                  name="projectName"
                  onChange={({ target: { value } }) => dispatch({ type: 'projectName', value })}
                  value={projectName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  onChange={({ target: { value } }) => dispatch({ type: 'description', value })}
                  value={description}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Twitter Followers (Minimum)"
                  name="twitterFollowersMin"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'twitterFollowersMin', value })
                  }
                  type="number"
                  minimum={0}
                  value={twitterFollowersMin}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Twitter Followers (Maximum)"
                  name="twitterFollowersMax"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'twitterFollowersMax', value })
                  }
                  type="number"
                  minimum={0}
                  value={twitterFollowersMax}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Discord Members (Minimum)"
                  name="discordMembersMin"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'discordMembersMin', value })
                  }
                  type="number"
                  minimum={0}
                  value={discordMembersMin}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Discord Members (Maximum)"
                  name="discordMembersMax"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'discordMembersMax', value })
                  }
                  type="number"
                  minimum={0}
                  value={discordMembersMax}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Collection Count (Minimum)"
                  name="collectionCountMin"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'collectionCountMin', value })
                  }
                  type="number"
                  minimum={0}
                  value={collectionCountMin}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Collection Count (Maximum)"
                  name="collectionCountMax"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'collectionCountMax', value })
                  }
                  type="number"
                  minimum={0}
                  value={collectionCountMax}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Mint Cost (Minimum)"
                  name="mintCostMin"
                  onChange={({ target: { value } }) => dispatch({ type: 'mintCostMin', value })}
                  type="number"
                  minimum={0}
                  value={mintCostMin}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Mint Cost (Maximum)"
                  name="mintCostMax"
                  onChange={({ target: { value } }) => dispatch({ type: 'mintCostMax', value })}
                  type="number"
                  minimum={0}
                  value={mintCostMax}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Mint Start Date"
                  name="mintStartDate"
                  onChange={({ target: { value } }) => dispatch({ type: 'mintStartDate', value })}
                  minimum={0}
                  value={mintStartDate}
                  placeholder="mm/dd/yyyy"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Mint End Date"
                  name="mintEndDate"
                  onChange={({ target: { value } }) => dispatch({ type: 'mintEndDate', value })}
                  minimum={0}
                  value={mintEndDate}
                  placeholder="mm/dd/yyyy"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Presale Start Date"
                  name="presaleStartDate"
                  onChange={({ target: { value } }) =>
                    dispatch({ type: 'presaleStartDate', value })
                  }
                  minimum={0}
                  value={presaleStartDate}
                  placeholder="mm/dd/yyyy"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField
                  fullWidth
                  label="Presale End Date"
                  name="presaleEndDate"
                  onChange={({ target: { value } }) => dispatch({ type: 'presaleEndDate', value })}
                  minimum={0}
                  value={presaleEndDate}
                  placeholder="mm/dd/yyyy"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <InputLabel id="multiple-chains">Chain</InputLabel>
                <Select
                  fullWidth
                  labelId="multiple-chains"
                  name="chains"
                  onChange={({ target: { value } }) => dispatch({ type: 'chains', value })}
                  multiple
                  value={chains}
                  variant="outlined"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected?.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {chainOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md={6} xs={12}>
                <InputLabel id="multiple-categories">Category</InputLabel>
                <Select
                  fullWidth
                  labelId="multiple-categories"
                  name="categories"
                  onChange={({ target: { value } }) => dispatch({ type: 'categories', value })}
                  multiple
                  value={categories}
                  variant="outlined"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected?.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {categoryOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item md={6} xs={12}>
                <Button color="secondary" variant="contained" onClick={() => onSave()}>
                  Save Filters
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default NftListFilters;

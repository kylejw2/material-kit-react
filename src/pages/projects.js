import { useReducer } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import NftListFilters from '../components/customer/nft-list-filters';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

const initialState = {
  projectName: null,
  twitterFollowersMin: null,
  twitterFollowersMax: null,
  discordMembersMin: null,
  discordMembersMax: null,
  description: null,
  collectionCountMin: null,
  collectionCountMax: null,
  mintCostMin: null,
  mintCostMax: null,
  mintStartDate: null,
  mintEndDate: null,
  presaleStartDate: null,
  presaleEndDate: null,
  chains: [],
  categories: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'chains':
      return { ...state, chains: [...action.value] };
    case 'categories':
      return { ...state, categories: [...action.value] };
    default:
      return { ...state, [action.type]: action.value };
  }
};

const Customers = () => {
  const [filterState, dispatch] = useReducer(reducer, initialState);

  // Memoize this function to prevent api call spam
  const onSaveFilters = () => {};

  return (
    <>
      <Head>
        <title>NFT Project List</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <NftListFilters {...filterState} dispatch={dispatch} />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;

import { useEffect, useReducer, useState } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import ProjectListResults from '../components/project/project-list-results';
import NftListFilters from '../components/project/nft-list-filters';
import { DashboardLayout } from '../components/dashboard-layout';

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
  skip: 0,
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
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    const filterString = Buffer.from(JSON.stringify(filterState)).toString('base64');

    const getResults = async () => {
      const result = await fetch(`/api/nfts?filters=${filterString}`).then((res) => res.json());

      setProjects((prev) => [...prev, ...result]);
    };
    getResults();
  };

  useEffect(() => {
    getProjects();
  }, []);

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
          <NftListFilters {...filterState} dispatch={dispatch} onSave={getProjects} />
          <Box sx={{ mt: 3 }}>
            <ProjectListResults projects={projects} dispatch={dispatch} getProjects={getProjects} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;

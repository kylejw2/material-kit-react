import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { format } from 'date-fns';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';

const ProjectListResults = ({ projects, dispatch, fetchMore, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const truncateString = (str) => {
    const length = 100;
    return str.length > length ? str.substring(0, length) + '...' : str;
  };

  // const handleSelectAll = (event) => {
  //   let newSelectedCustomerIds;

  //   if (event.target.checked) {
  //     newSelectedCustomerIds = customers.map((customer) => customer.id);
  //   } else {
  //     newSelectedCustomerIds = [];
  //   }

  //   setSelectedCustomerIds(newSelectedCustomerIds);
  // };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);

    if ((newPage + 1) * limit >= projects.length) {
      dispatch({ type: 'skip', value: projects.length });
      fetchMore();
    }
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>NFT Project</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Mint Date</TableCell>
                <TableCell>Presale Date</TableCell>
                <TableCell>Mint Cost</TableCell>
                <TableCell>Chain</TableCell>
                <TableCell>Twitter Followers</TableCell>
                <TableCell>Discord Members</TableCell>
                <TableCell>Collection Count</TableCell>
                <TableCell>Traits Count</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects?.slice(page * limit, (1 + page) * limit).map((project) => (
                <TableRow
                  hover
                  key={project._id}
                  selected={selectedCustomerIds.indexOf(project._id) !== -1}
                  max-height={150}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#121828', textDecoration: 'none' }}
                        >
                          {project.projectName}
                        </a>
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{truncateString(project.description)}</TableCell>
                  <TableCell>
                    {project.mintDate ? format(new Date(project.mintDate), 'PPPP') : 'TBA'}
                  </TableCell>
                  <TableCell>
                    {project.presaleDate ? format(new Date(project.presaleDate), 'PPPP') : 'TBA'}
                  </TableCell>
                  <TableCell>{project.mintCost || 'TBA'}</TableCell>
                  <TableCell>{project.chain || 'TBA'}</TableCell>
                  <TableCell>
                    <a
                      href={project.twitterLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#121828', textDecoration: 'none' }}
                    >
                      {String(project?.twitterFollowers || '').replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ','
                      )}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href={project.discordLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#121828', textDecoration: 'none' }}
                    >
                      {String(project?.discordMembers || '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </a>
                  </TableCell>
                  <TableCell>
                    {String(project?.collectionCount || '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </TableCell>
                  <TableCell>
                    {String(project?.traitsCount || '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </TableCell>
                  <TableCell>{project.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={projects.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default ProjectListResults;

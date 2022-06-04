const makeQuery = (filters) => {
  const query = {};

  // projectName,
  if (filters.projectName) {
    query.projectName = { $regex: filters.projectName, $options: 'i' };
  }
  // twitterFollowersMin,
  if (filters.twitterFollowersMin) {
    query.twitterFollowers = { $gte: +filters.twitterFollowersMin };
  }
  // twitterFollowersMax,
  if (filters.twitterFollowersMax) {
    query.twitterFollowers = { ...query.twitterFollowers, $lte: +filters.twitterFollowersMax };
  }
  // discordMembersMin,
  if (filters.discordMembersMin) {
    query.discordMembers = { $gte: +filters.discordMembersMin };
  }
  // discordMembersMax,
  if (filters.discordMembersMax) {
    query.discordMembers = { ...query.discordMembers, $lte: +filters.discordMembersMax };
  }
  // description,
  if (filters.description) {
    query.description = { $regex: filters.description, $options: 'i' };
  }
  // collectionCountMin,
  if (filters.collectionCountMin) {
    query.collectionCount = { $gte: +filters.collectionCountMin };
  }
  // collectionCountMax,
  if (filters.collectionCountMax) {
    query.collectionCount = { ...query.collectionCount, $lte: +filters.collectionCountMax };
  }
  // mintCostMin,
  if (filters.mintCostMin) {
    query.mintCost = { $gte: +filters.mintCostMin };
  }
  // mintCostMax,
  if (filters.mintCostMax) {
    query.mintCost = { ...query.mintCost, $lte: +filters.mintCostMax };
  }
  // mintStartDate,
  if (filters.mintStartDate) {
    query.mintDate = { $gte: new Date(filters.mintStartDate) };
  }
  // mintEndDate,
  if (filters.mintEndDate) {
    query.mintDate = { ...query.mintDate, $lte: new Date(filters.mintEndDate) };
  }
  // presaleStartDate,
  if (filters.presaleStartDate) {
    query.presaleDate = { $gte: new Date(filters.presaleStartDate) };
  }
  // presaleEndDate,
  if (filters.presaleEndDate) {
    query.presaleDate = { ...query.presaleDate, $lte: new Date(filters.presaleEndDate) };
  }
  // chains,
  if (filters.chains && filters.chains.length) {
    query.chain = { $in: filters.chains };
  }
  // categories,
  if (filters.categories && filters.categories.length) {
    query.category = { $in: filters.categories };
  }

  return query;
};

export default makeQuery;

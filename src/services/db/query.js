const makeQuery = (filters) => {
  const query = {};

  // projectName,
  if (filters.projectName) {
    query.projectName = { $regex: filters.projectName, $options: 'i' };
  }
  // twitterFollowersMin,
  if (filters.twitterFollowersMin) {
    query.twitterFollowersMin = { $gte: +filters.twitterFollowersMin };
  }
  // twitterFollowersMax,
  if (filters.twitterFollowersMax) {
    query.twitterFollowersMax = { $lte: +filters.twitterFollowersMax };
  }
  // discordMembersMin,
  if (filters.discordMembersMin) {
    query.discordMembersMin = { $gte: +filters.discordMembersMin };
  }
  // discordMembersMax,
  if (filters.discordMembersMax) {
    query.discordMembersMax = { $lte: +filters.discordMembersMax };
  }
  // description,
  if (filters.description) {
    query.description = { $regex: filters.description, $options: 'i' };
  }
  // collectionCountMin,
  if (filters.collectionCountMin) {
    query.collectionCountMin = { $gte: +filters.collectionCountMin };
  }
  // collectionCountMax,
  if (filters.collectionCountMax) {
    query.collectionCountMax = { $lte: +filters.collectionCountMax };
  }
  // mintCostMin,
  if (filters.mintCostMin) {
    query.mintCostMin = { $gte: +filters.mintCostMin };
  }
  // mintCostMax,
  if (filters.mintCostMax) {
    query.mintCostMax = { $lte: +filters.mintCostMax };
  }
  // mintStartDate,
  if (filters.mintStartDate) {
    query.mintStartDate = { $gte: new Date(filters.mintStartDate) };
  }
  // mintEndDate,
  if (filters.mintEndDate) {
    query.mintEndDate = { $lte: new Date(filters.mintEndDate) };
  }
  // presaleStartDate,
  if (filters.presaleStartDate) {
    query.presaleStartDate = { $gte: new Date(filters.presaleStartDate) };
  }
  // presaleEndDate,
  if (filters.presaleEndDate) {
    query.presaleEndDate = { $lte: new Date(filters.presaleEndDate) };
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

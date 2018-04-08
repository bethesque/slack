const { Release } = require('../../lib/messages/release');
const releaseFixture = require('../fixtures/webhooks/release/non_prerelease.json');
const repoFixture = require('../fixtures/repo.json');

describe('Release rendering', () => {
  test('works', () => {
    const deploymentStatusMessage = new Release({
      release: releaseFixture,
      repository: repoFixture,
    });
    expect(deploymentStatusMessage.toJSON()).toMatchSnapshot();
  });
});

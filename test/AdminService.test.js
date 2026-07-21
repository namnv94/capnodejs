const cds = require('@sap/cds');

const { GET, POST, expect, defaults } = cds.test(__dirname + '/..');

describe('AdminService OData APIs', () => {
  it('serves AdminService.Books', async () => {
    const { data } =
      await GET`/odata/v4/admin/Books ${{ params: { $select: 'ID,title' } }}`;
    expect(data.value).to.containSubset([
      { ID: 25415501, title: 'title-25415501' }
    ]);
  });
});

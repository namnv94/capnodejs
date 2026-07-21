const cds = require('@sap/cds');

const { GET, POST, expect, defaults } = cds.test(__dirname + '/..');

describe('CatalogService OData APIs', () => {
  it('serves CatalogService.ListOfBooks', async () => {
    const { data } =
      await GET`/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,title' } }}`;
    expect(data.value).to.containSubset([
      { ID: 201, title: 'Wuthering Heights' }
    ]);
  });

  it('executes submitOrder', async () => {
    const { data } = await POST`/odata/v4/catalog/submitOrder ${{
      book: 201,
      quantity: 1
    }}`;
    // TODO finish this test
    // expect(data.value).to...
  });
});

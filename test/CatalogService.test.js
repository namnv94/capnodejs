const cds = require('@sap/cds')

const { GET, POST, expect, defaults } = cds.test (__dirname+'/..')

describe('CatalogService OData APIs', () => {

  it('serves CatalogService.ListOfBooks', async () => {
    const { data } = await GET `/odata/v4/catalog/ListOfBooks ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([
      {"ID":5831782,"title":"title-5831782"},
    ])
  })

  it('executes submitOrder', async () => {
    const { data } = await POST `/odata/v4/catalog/submitOrder ${
      {"book":5999067,"quantity":42}
    }`
    // TODO finish this test
    // expect(data.value).to...
  })
})

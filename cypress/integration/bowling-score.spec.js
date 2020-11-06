describe('Part 1 : Added simple frame scores', () => {

    /* EXAMPLE of Cypress Unit test API*/
    it('Check scores added - simple way 1', () => {
        cy
        .request('POST', 
            'http://localhost:3000/bowling-score/', 
            {throws : '1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0'})
        .then((response) => {
            // Check the attempted result
            expect(response.body.result).to.equal(1)
        })
    })

})

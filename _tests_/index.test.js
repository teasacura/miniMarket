test('fetches data from the backend', (done) => {
  function callback(data){
    expect(data.items).toBe(3);
    done();
  }

  fetchData(callback);
})

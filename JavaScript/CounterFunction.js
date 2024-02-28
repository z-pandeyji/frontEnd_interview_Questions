function createCounter() {
    let count = 0;
  
    return {
      get count() {
        return count++;
      }
    }
  }
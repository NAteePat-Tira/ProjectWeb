async function getData() {
    const url = "http://localhost:5431/api/product_data/1";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Response status: ${response.status}');
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getData();
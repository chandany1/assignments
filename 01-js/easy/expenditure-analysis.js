/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let results = [];
  transactions.map(transaction => {
        const categoryObj = results.find(obj=> obj.category===transaction["category"]);
      if(categoryObj==undefined){
        results.push({category : transaction["category"], totalSpent : transaction["price"]})
      }else{
        let updatedPrice = categoryObj.totalSpent + transaction["price"];
        results = results.map(obj=>{
          if(obj.category===categoryObj.category){
            return {category : obj.category,totalSpent : updatedPrice}
          }
          return obj;
        });
      }
  });
 
  return results;
}

module.exports = calculateTotalSpentByCategory;

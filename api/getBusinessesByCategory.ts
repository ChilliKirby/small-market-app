

const getBusinessesByCategory = async(category: string) => {

    console.log("in call")
    const response = await fetch(`http://192.168.86.123:3001/users/business/businesseswithcategories?category=${category}`);
                                  
    const data = await response.json();
    console.log(data);
}

export default getBusinessesByCategory;
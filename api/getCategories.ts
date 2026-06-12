

const getCategories = async () => {


    try {
        const response = await fetch(
            "http://192.168.86.123:3001/users/business/categories"
        );

        if (response) {
            const data = await response.json();
            console.log(data);
            return data;

        } else {
            return [];
        }
    } catch (error) {
        return [];
    }

}

export default getCategories;
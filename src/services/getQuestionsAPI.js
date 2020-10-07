const getQuestionsAPI = async (url) => {
    try {
        return await fetch(url).then((response) => response.json());
    } catch (error) {
        console.error("Error:", error);
    }
};

export default getQuestionsAPI;
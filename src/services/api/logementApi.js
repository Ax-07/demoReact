export const getAllData = async () => {
    try {
        const response = await fetch('../src/db/annoncesLogements.json');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}
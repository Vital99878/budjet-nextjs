export async function getJSON<T>(path: string) {
    try {
        const data = await import((`./${path}.json`));
        return data.default as T;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}

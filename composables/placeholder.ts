
export function usePlaceholders() {
    const baseUrl = 'http://via.placeholder.com';
    const kittenUrl = 'http://placekitten.com';

    function getPlaceholder(width: number, height: number) {
        return `${baseUrl}/${width}x${height}`;
    }

    function getKitten(width: number, height: number) {
        return `${kittenUrl}/${width}/${height}`;
    }



    return { getPlaceholder, getKitten };
}
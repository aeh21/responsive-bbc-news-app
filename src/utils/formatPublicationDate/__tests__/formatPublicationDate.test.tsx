import formatPublicationDate from "..";

describe('formatPublicationDate', () => {
    it('should return a given date in (dd-MM-yyyy, HH:mm) format', () => {
        const date = '2023-01-28T18:17:22Z';
        expect(formatPublicationDate(date)).toEqual('28-01-2023, 18:17');
    })
})
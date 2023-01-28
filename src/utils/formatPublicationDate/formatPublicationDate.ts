import { format } from 'date-fns';

const formatPublicationDate = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return format(date, "dd-MM-yyyy, HH:mm")
}

export default formatPublicationDate;
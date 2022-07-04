import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client= sanityClient({
    projectId: 's3pmko82',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'skG20B3K1qRUYTO3sZ9IdoYsuBjAF9rT9b9IqcR6jQ5DtnEbnz6XFPs1xIMeh1itXGraKe1YgikcqN7PZ7K36020E97hbMsqKJ1LNkQb2ZkI8q8Ou0lICg4uxDp40ThhlTM3W5mvE33lcnm54QBXekC2NgBqMyb3OKjRlVI1PJQTYeVWWCR2'
});

const builder= imageUrlBuilder(client);
export const urlFor = (source)=> builder.image(source); 
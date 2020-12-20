const apiKey = 'iUcSZ3cM9cRe2pAfLhlIEFRquGS558zJ6cVA2xhbCajQ4muN8AxmaBJb4yLYxMKx-mK00cHu58qC8MhzxTpu_F6VgPRbnuvGdcRLlmrNHKGLfxgvUozyIwqHS5XeX3Yx';
export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({ 
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                        }));
                    }
                });
            }
        };


const Twit = require('twit')
const config = require('./config')
const request = require('request-promises')
let NYT = require('nyt');


let T = new Twit(config);

let params = {
    id: 1,
}

let trends = []

T.get('trends/place', params, function(err, data) {

    if (err) {
        console.log('Something went wrong while SEARCHING...');
    } else {
        let hi = data[0].trends
            //console.log(hi);
        for (i = 0; i < hi.length; i++) {
            let x = hi[i].name
                //console.log(x);
            request.get({
                    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
                    qs: {
                        'api-key': "a852f57605d046cf931a866f480b27cb",
                        'q': x,
                    },
                })
                .then(function(response) {
                    body = JSON.parse(response);
                    console.log(response.response.docs[0].web_url);
                });

        }
    }
})
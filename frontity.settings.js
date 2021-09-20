
const settings = 
[
{
  "name": "shongshoy",
  "state": {
    "frontity": {
      "url": "https://shongshoy.com",
      "title": "সংশয় - চিন্তার মুক্তির আন্দোলন",
      "description": "জ্ঞান যেখানে সীমাবদ্ধ, যুক্তি যেখানে আড়ষ্ট, মুক্তি সেখানে অসম্ভব"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "মূলপাতা",
              "/"
            ],
            [
              "প্রবন্ধ আর্কাইভ",
              "/archive-articles"
            ],
            [
              "তথ্য–ইসলাম",
              "references/islam"
            ],
            [
              "তথ্য–হিন্দু",
              "/references/hinduism"
            ],
            
            [
              "তথ্য–খ্রিস্ট",
              "/references/christianity"
            ],
            [
              "গ্রন্থাগার",
              "/library"
            ],
            [
              "নিয়মাবলী",
              "/about/terms-service-privacy-policy"
            ],

            [
              "নীতিমালা",
              "/rules"
            ],
            [
              "উত্তরসমূহ",
              "/faq"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true,
            }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.shongshoy.com"
        }
      }
    },
    
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
},

{
  "name": "shongshoy-amp",
  "match": "(\\?|&)amp=true",
  "packages": [
    "@frontity/amp"
    // ...your other packages
  ],
},


];
export default settings;

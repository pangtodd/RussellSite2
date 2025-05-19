module.exports = function (eleventyConfig){

    const { DateTime } = require("luxon");

    eleventyConfig.addFilter("basicDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("MMMM d, yyyy");
    });
    eleventyConfig.addFilter("isoDate", function(dateObj) {
        if (!(dateObj instanceof Date)) {
            return ''; 
        }
    return DateTime.fromJSDate(dateObj).toUTC().toISO();
    });


    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("robots.txt");

    eleventyConfig.addCollection("featuredPost", function(collectionApi) {
        const featuredPosts = collectionApi.getFilteredByGlob("src/featured/*.md") 
          .filter(item => item.data.featured === true);
        featuredPosts.sort((a, b) => b.date - a.date);
        return featuredPosts.slice(0, 1);
      });

    eleventyConfig.addCollection("blogs", function(collectionApi){
        return collectionApi.getFilteredByGlob("src/blogs/*.md").sort(function(a,b){
            return new Date(a.data.date) - new Date(b.data.date);
        });
    });

    eleventyConfig.addCollection("books", function(collectionApi){
        return collectionApi.getFilteredByGlob("src/books/*.md").sort(function(a,b){
            return a.data.order - b.data.order;
        });
    });

    eleventyConfig.addCollection("press", function(collectionApi){
        return collectionApi.getFilteredByGlob("src/press/*.md").sort(function(a,b){
            return a.data.order - b.data.order;
        });
    });

    return {
        dir:{
            input: "src",        
            includes: "_includes",
            layouts: "_includes",
            output: "_site"
        }
    };
};
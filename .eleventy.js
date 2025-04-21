module.exports = function (eleventyConfig){

    const { DateTime } = require("luxon");

    eleventyConfig.addFilter("basicDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("MMMM d, yyyy");
    });


    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");


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

    return {
        dir:{
            input: "src",        
            includes: "_includes",
            layouts: "_includes",
            output: "_site"
        }
    };
};
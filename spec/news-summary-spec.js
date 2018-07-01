'use strict';
(function () {
    let newssummary = new NewsSummaryModel("replace with API");
    assert.isTrue("The url has a domain", newssummary.newsUrl() === "replace with API");
})();

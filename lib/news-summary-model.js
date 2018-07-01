'use strict';
(function (exports) {
  function NewsSummaryModel(newsUrl) {
    this._newsUrl = newsUrl;
  }
  exports.NewsSummaryModel = NewsSummaryModel;
})(this);

NewsSummaryModel.prototype.newsUrl = function () {
  return this._newsUrl;
};

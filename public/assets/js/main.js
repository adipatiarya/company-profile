"use strict";
new GitHubCalendar("#github-graph", "adipatiarya", { responsive: true });
GitHubActivity.feed({
    username: "adipatiarya",
    selector: "#feed",
    limit: 20, // optional
});
jQuery(function($) {
    $("#rss-feeds").rss("http://feeds.feedburner.com/premiumpixels");
});
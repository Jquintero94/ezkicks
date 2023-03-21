chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'displayVideoReview') {
        chrome.tabs.create({
            url: 'https://www.youtube.com/results?search_query=' + encodeURIComponent(request.shoeName) + '+review'
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#display-video-review').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'displayVideoReview', shoeName: 'INSERT_SHOE_NAME_HERE'});
        });
    });
});

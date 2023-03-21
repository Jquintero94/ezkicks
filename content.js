document.addEventListener('click', function(event) {
    if (event.target.matches('INSERT_SHOE_SELECTOR_HERE')) {
        chrome.runtime.sendMessage({action: 'displayVideoReview', shoeName: event.target.textContent});
    }
});

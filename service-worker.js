function openModal() {
  chrome.windows.create({
    url: 'assets/modal.html',
    type: 'popup',
    width: 400,
    height: 400,
    focused: true,
  });
}

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install' || reason === 'update') {
    openModal();
  }
});

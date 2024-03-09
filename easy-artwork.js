function addSheetButton(sheet, buttons) {
	buttons.unshift({
		class: `easy-artwork-button`,
		icon: 'far fa-images',
		label: 'Show Artwork',
		onclick: (e) => {
			const doc = sheet.document;
			new ImagePopout(doc.img, { title: doc.name, uuid: doc.uui }).render(true);
		}
	});
}
  
function addPlayerShareButton(popout, buttons) {
	if (game.user.isGM)
	{
		// GM Already has a share button
		return;
	}

	buttons.unshift({
		label: "JOURNAL.ActionShow",
		class: "share-image",
		icon: "fas fa-eye",
		onclick: (e) => {
			popout.shareImage();
		}
	});
}
  
Hooks.on('getActorSheetHeaderButtons', addSheetButton);
Hooks.on('getItemSheetHeaderButtons', addSheetButton);
Hooks.on('getImagePopoutHeaderButtons', addPlayerShareButton);
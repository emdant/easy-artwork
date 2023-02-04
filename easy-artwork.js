function addButton(sheet, buttons) {
  buttons.unshift({
		class: `easy-artwork-button`,
		icon: 'far fa-images',
		label: 'Show Artwork',
		onclick: (e) => {
			const doc = sheet.document;

			game.socket.emit('shareImage', {
				image: doc.img,
				title: doc.name,
				uuid: doc.uuid
			});

			ui.notifications.info("Artwork shown to all other users");
		}
	});
}

Hooks.on('getActorSheetHeaderButtons', addButton);
Hooks.on('getItemSheetHeaderButtons', addButton);
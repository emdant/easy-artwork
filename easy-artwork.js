function addButton(sheet, buttons) {
  buttons.unshift({
		class: `easy-artwork-button`,
		icon: 'far fa-images',
		label: 'Show Artwork',
		onclick: (e) => {
			const [type, id] = sheet.id.split('-');
			const entity = game[`${type}s`].get(id);

			game.socket.emit('shareImage', {
				image: entity.data.img,
				title: "",
				uuid: entity.uuid
			});
		}
	});
}

Hooks.on('getActorSheetHeaderButtons', addButton);
Hooks.on('getItemSheetHeaderButtons', addButton);
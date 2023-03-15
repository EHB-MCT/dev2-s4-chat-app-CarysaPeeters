"use strict";

const chat = {
	author: "yourName",
	init() {
		this.fetchMessages();
	},
	sendMessage() {
		const data = {
			author: "Carysa",
			message: "test message",
		};

		fetch("https://dev2chat.onrender.com/message", {
			method: "Post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(function(){
            this.fetchMessages();
        });
	},
	fetchMessages() {
		fetch("https://dev2chat.onrender.com/messages")
			.then(function (data) {
				return data.json();
			})
			.then(function (messagesJson) {
				messagesJson.sort(function (a, b) {
					if (a.id < b.id) {
						return -1;
					} else {
						return 1;
					}
				});

				document.querySelector("#messageContainer").innerHTML = "";

				messagesJson.forEach(function (msg) {
					console.log(messagesJson);
					const string = `
                    <div class="messageItem">
                    <div class="header">
                    <span class="author">${msg.author}</span>
                    <span class="time">00:00</span>
                    </div>
                    <p>
                    ${msg.message}</p>
                    </div>
                    `;
					document.querySelector("#messageContainer").insertAdjacentHTML("beforeend", string);
				});
			});
	},
	renderMessage(message) {},
};

chat.init();
// chat.sendMessage();

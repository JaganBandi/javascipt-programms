function calculateTicketCost(ticketPrice, tickets) {
	return ticketPrice * tickets
}

let price = calculateTicketCost(200, 4);
console.log(price);
// Starter code
console.log('by Valeh Ismayilov') 

// Main function
function convertToBinary(x, cal) {
    // Set BIN
    let bin = 0;
    // Set REM
    let rem, i = 1
    // Calculate
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    // Write to console
   	console.log(`${cal}: ${bin}`);
}

// SetInterval for relax program
setInterval(() => {
	// Write all numbers via FOR
    for(let i=0; i<10000001; i++) {
		convertToBinary(i, i);	
	}
}, 3000)
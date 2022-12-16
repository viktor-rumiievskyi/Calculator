let a = ''; // first number
let b = ''; // secont number
let sign = ''; // знак операции
let finish  = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/', '%'];

// экран 
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; // first number and result
    b = ''; // second number
    sign = ''; // operation sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // no button pressed
    if(!event.target.classList.contains('btn')) return;
    // button pressed clearAll ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //get pressed button
    const key = event.target.textContent;

    //if key 0-9 is pressed
    if (digit.includes(key)) {
			if (b ==='' && sign ==='') {
				a += key;
				out.textContent = a;
			}
			else if (a!=='' && b!=='' &&finish ){
				b = key;
				finish = false;
				out.textContent = b;
			}
			else {
				b += key
				out.textContent = b;
			}
			console.table(a, b, sign);
			return
	}

	  //if key is pressed + - / *
			if (action.includes(key)) {
				sign = key;
				console.table(a, b, sign);
				out.textContent = sign;
				return;
			}

		//if the key is pressed =
		if (key === '=') {
			if ( b === '') b = a;
			switch (sign) {
				case "+":
					a = (+a) + (+b);
					break;
				case "-":
					a = a - b;
					break;
				case "*":
					a = a * b;
					break;
				case "/":
						if (b === '0') {
							out.textContent = 'Error';
							a='';
							b='';
							sign='';
							return;
						}
						a = a / b;
						break;
				case "%":
					a = a % b;
					break;
			}
			finish = true;
			out.textContent = a;
			console.table(a, b, sign);
		}
};
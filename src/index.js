
import './index.css';

import nummeral from 'numeral';

const amount = numeral(1234).format('$0,0.00');
console.log(`I want ${amount} in my account`);

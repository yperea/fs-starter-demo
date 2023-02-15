import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Yesid';
  greetUser(name);

  // Query the elements
  const form = document.querySelector<HTMLFormElement>('[ic-element="form"]');
  const resultLoan = document.querySelector<HTMLFormElement>('[ic-element="result-loan"]');
  const resultInterest = document.querySelector<HTMLFormElement>('[ic-element="result-interest"]');
  const resultTotal = document.querySelector<HTMLFormElement>('[ic-element="result-total"]');
  const resultMonthly = document.querySelector<HTMLFormElement>('[ic-element="result-monthly"]');

  console.table({ resultLoan, resultInterest, resultTotal, resultMonthly });

  if (!form || !resultLoan || !resultInterest || !resultTotal || !resultMonthly) return;

  // Listen for form submission events
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Get the data from the calculator

    const formData = new FormData(form);
    const amount = formData.get('amount');
    const rate = formData.get('rate');
    const term = formData.get('term');

    //console.log([...formData.entries()]);
    console.table({ amount, rate, term });

    if (!amount || !rate || !term) return;

    // Perform any maths
    // I - P * r * T
    const totalInterest = Number(amount) * (Number(rate) / 100) * Number(term);
    const total = Number(amount) + totalInterest;
    const monthlyPayment = total / 12;

    // Display the results

    resultLoan.textContent = amount.toString();
    resultInterest.textContent = totalInterest.toString();
    resultTotal.textContent = total.toString();
    resultMonthly.textContent = monthlyPayment.toString();

    //console.log({ total });
  });
});

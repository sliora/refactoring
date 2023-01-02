export function printOwing(invoice) {
  printBanner();

  let outstanding = 0;

  function printBanner() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
  }

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);
const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
export function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);

}
